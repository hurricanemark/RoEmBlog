require('dotenv').config();
const express = require('express');
//const path = require('path')
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const BlogPost = require('./models/BlogPost');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash');


const validateMiddleWare = require('./middleware/validationMiddleware')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

mongoose.set('useCreateIndex', true);

/* connect to local mongodb server */
/*
mongoose.connect('mongodb://192.168.0.11/my_database', 
    {useNewUrlParser:true, useUnifiedTopology: true});
*/
/* connect to mongodb atlas */
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser:true, useUnifiedTopology: true} );
const app = new express()
// using ejs engine
app.set('view engine', 'ejs')

//applying middlewares
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload())
app.use('/post/store', validateMiddleWare)
app.use(flash());

let port = process.env.PORT;
if (port == null || port == "") {
    port = 4000;
}
app.listen(port, () => {
    console.log('RoEm Blog is listening...')
})

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))
global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});


// -- Users: registration --
const newUserController = require('./controllers/newUser')
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)

const storeUserController = require('./controllers/storeUser')
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)

// -- Users: login --
const loginController = require('./controllers/login')
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)

const loginUserController = require('./controllers/loginUser')
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

const logoutController = require('./controllers/logout')
app.get('/auth/logout', logoutController)



// -- GETs: Rendering pages --
const renderHomeController = require('./controllers/renderHome')
app.get('/', renderHomeController)

const aboutController = require('./controllers/getAbout')
app.get('/about', aboutController)

const contactController = require('./controllers/getContact')
app.get('/contact', contactController)

const postController = require('./controllers/getPost')
app.get('/post', postController)

const postByIdController = require('./controllers/getPostById')
app.get('/post/:id', postByIdController)


// -- POSTs: form data to & frow my_database --
const newPostController = require('./controllers/newPost')
app.get('/posts/new', authMiddleware, newPostController)

// use ES8 ... async and await
const writePostController = require('./controllers/writePostToDbase')
app.post('/posts/store', authMiddleware, writePostController)


const deletePostController = require('./controllers/deletePost')
app.post('/delete/:id', deletePostController)

app.use((req, res) => res.render('notFound'));