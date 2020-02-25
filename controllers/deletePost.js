const BlogPost = require('../models/BlogPost.js')

module.exports = async(req, res) => {
    // Issue a mongodb findAndModify remove command by a document's _id field. 
    //findByIdAndRemove(id, ...) is equivalent to findOneAndRemove({ _id: id }, ...). 
    //Finds a matching document, removes it, passing the found document (if any) to 
    //the callback. Executes immediately if callback is passed, else a Query object 
    //is returned.
    const blogposts = await BlogPost.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            return flash(error)
        }
        res.render('index', { blogposts })
    });
}