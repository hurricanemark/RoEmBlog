const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://192.168.0.11/my_database', {useNewUrlParser:true});
BlogPost.create({ 
    title: 'The Morning Garden East of October', 
    body: 'Almost heaven, east october.  Green shoots of swiss chards, Cherockee tomatoes.  Life is simpler here, quiet and crisp; Tardie taste of kales, honey sweet of apricots.',
    username: 'Mark Nguyen',
    datePosted: 'Date()'
}, (error, blogpost) => {
    console.log(error, blogpost);
});

BlogPost.find({}, (error, blogpost) => {
    console.log("All posts:", error, blogpost);
})

var id = "5e50316a93495517dadc792c";
BlogPost.findByIdAndUpdate(id, {title:'Updated title'}, (error, blogpost) => {
    console.log(error, blogpost);
})

BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error, blogpost);
})

