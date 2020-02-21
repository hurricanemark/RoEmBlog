const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost');
const fileUpload = require('express-fileupload')
    

mongoose.connect('mongodb://192.168.0.11/my_database', {useNewUrlParser:true, useUnifiedTopology: true});

const app = new express()
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload())

// -- GETs: Rendering pages --
app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    //console.log(blogposts);
    res.render('index', {
        blogposts
    }); //rendering file views/index.ejs
})

app.get('/about', (req, res) => {
    res.render('about')  //rendering file views/about.ejs
})

app.get('/contact', (req, res) => {
    res.render('contact')  //rendering file views/ConstantSourceNode.ejs
})

app.get('/post', (req, res) => {
    res.render('post')  //rendering file views/post.ejs
})

app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost
    })  //rendering file views/post.ejs
})


// -- POSTs: form data to & frow my_database --

app.get('/posts/new', (req, res) => {    
    res.render('create')
})

app.post('/posts/store', async (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img', image.name), async (error) => {
        await BlogPost.create({
            ...req.body, 
            image:'/img/' + image.name
        }) 
        res.redirect('/')
    })

    // model creates a new doc with browser data into my_database
    // use ES8 ... async and await
    /*
    await BlogPost.create(req.body, (error, blogpost) => {
        //wait before redirect:
        res.redirect('/')
    })
    */    
})

app.listen(4000, () => {
    console.log('App listening on port 4000')
})