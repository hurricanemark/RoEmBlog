const BlogPost = require('../models/BlogPost.js')

module.exports = async(req, res) => {
    const blogposts = await BlogPost.findByIdAndRemove(req.params.id, (error) => {
        if (error) return next(error);
        res.render('index', { blogposts })
    });
}