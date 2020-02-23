const express = require('express')
//const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const BlogPost = require('./models/BlogPost');
const fileUpload = require('express-fileupload')



const validateMiddleWare = require('./middleware/validationMiddleware')


mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true, useUnifiedTopology: true});

const app = new express()

// using ejs engine
app.set('view engine', 'ejs')

//applying middlewares
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload())
app.use('/post/store', validateMiddleWare)

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
app.get('/posts/new', newPostController)

// use ES8 ... async and await
const writePostController = require('./controllers/writePostToDbase')
app.post('/posts/store', writePostController)

const deletePostController = require('./controllers/deletePost')
app.post('/delete/:id', deletePostController)

app.listen(4000, () => {
    console.log('App listening on port 4000')
})