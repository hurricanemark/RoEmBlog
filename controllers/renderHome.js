const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({})
    //console.log(blogposts);
    res.render('index', {
        blogposts
    }); //rendering file views/index.ejs
}