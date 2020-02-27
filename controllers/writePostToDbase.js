const BlogPost = require('../models/BlogPost.js')
const path = require('path')
// model creates a new doc with browser data into my_database
module.exports = async (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {        
        await BlogPost.create({
            ...req.body, 
            image:'/img/' + image.name,
            userid:req.session.userId
        }) 
        res.redirect('/')
    })  
}