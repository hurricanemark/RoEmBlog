const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) => {
    const blogposts = await BlogPost
        .find({})
        .populate('userid')
        .sort([['datePosted', 'descending']])
        .exec(function(error, blogposts) {
        if (error) { return flash(error) } else {
            res.render('index', {
                blogposts
            }); //rendering file views/index.ejs
        }
    })
    //console.log(req.session, blogposts);    
}