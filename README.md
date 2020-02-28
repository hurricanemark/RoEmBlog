# [RoEm Blog uses UI Template from Start Bootstrap ](https://github.com/hurricanemark/RoEmBlog)

[RoEm Blog](https://github.com/hurricanemark/RoEmBlog) uses a stylish, responsive blog theme from [Start Bootstrap](https://startbootstrap.com/template-overviews/clean-blog/) as a base UI looks and feel. We took it and refactor into MVC structure.  Then implemented the full MERN stack enabling a functional web blog.  

## Preview  

![RoEm Blog Preview](https://github.com/hurricanemark/RoEmBlog/blob/master/public/img/Index.PNG)

  

**[[Live demo](userid: demo password:demo)](https://roemblog.herokuapp.com/)**

## Status  

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-clean-blog/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-clean-blog.svg)](https://www.npmjs.com/package/startbootstrap-clean-blog)
[![Build Status](https://travis-ci.org/BlackrockDigital/startbootstrap-clean-blog.svg?branch=master)](https://travis-ci.org/BlackrockDigital/startbootstrap-clean-blog)
[![dependencies Status](https://david-dm.org/BlackrockDigital/startbootstrap-clean-blog/status.svg)](https://david-dm.org/BlackrockDigital/startbootstrap-clean-blog)
[![devDependencies Status](https://david-dm.org/BlackrockDigital/startbootstrap-clean-blog/dev-status.svg)](https://david-dm.org/BlackrockDigital/startbootstrap-clean-blog?type=dev)

## Download and Installation

To begin using this template, choose one of the following options to get started:
* Clone the repo: `git clone https://github.com/hurricanemark/RoEmBlog.git`
* [Fork, Clone, or Download on GitHub](https://github.com/hurricanemark/RoEmBlog.git)

## Usage

### Basic Usage

- After cloning it, bring the requirements up to date  
`npm install`  

- Define your own mongodb source and connectivity by editing files *package.json*, *index.js*  
- Run  
`npm start`  

### Advanced Usage

- Use nodemon parameters to run on target host and port by configuring file *package.json*  
> "scripts: {
> 	"start": "nodemon index.js --inspect 10.0.0.2 3000"
> }


### Deploy on Heroku  
- (Recommend) follow instruction on deploying NodeJS on Heroku.  
- Push your code onto github
- Sign up for heroku account  
- Install Heroku commandline  
- Login heroku from your terminal starting at your project root folder.  
- Create file named Procfile and insert the following:
> web: node index.js  
_ Update package.json with the following:  
> ...  
> "license": "MIT",  
> "engines": {  
>    "node": "13.5.0"    
> },  
- Because Heroku automatically sets up an environment variable process.env.PORT, ou have to specify this in *index.js*  
> let port = process.env.PORT;
> if (port == null || port == "") {  
>    port = 12345;  
> }
>
> app.listen(port, () => {
>    console.log('App listening...')  
>  })    

- Deploy to heroku (make sure all files are synced with origin on github):  
+ Set heroku config variables:  
`heroku config:set MONGODB_CONNECTION_STRING=mongodb+srv://[username]:[password]@cluster2-brf1j.mongodb.net/my_database`  

`heroku create`  
`git push heroku master`  

Et voila!  

- To rename your site on heroku:  
`heroku apps:rename newname --app oldname`  

## Caviats

Note that Heroku hosting employs container technology; i.e. the filesystem is ephemeral.  Any changess to the filesystem while dyno is running is only last until that dyno is shutdown or restarted.  

Each dyno boots with a clean copy of your latest deploy.  Any file uploaded during previous session no longer exist.

Since Heroku is not suitable for persistent storage of data, uploads should be stored at dedicated storage service such as using a database, S3 bit bucket, etc.  

## Credits

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* https://startbootstrap.com  