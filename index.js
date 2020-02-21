const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = new express()
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index'); //rendering file views/index.ejs
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

app.listen(4000, () => {
    console.log('App listening on port 4000')
})