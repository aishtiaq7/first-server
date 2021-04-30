const express = require("express");
const app = express();

const port = 3000; 
console.log('\tServer started at port:' + port);

// console.log('__dirname', __dirname);

app.set('views', __dirname + '/views');
app.engine('ejs', require('ejs').renderFile);

app.get("/", function (req, res) {

    // var sub = 'testing out ejs variables';
    // res.render("index.ejs", {subreddit: sub});
    var ejsVar = 'awshaf'; 
    res.render('index.ejs', { ejsVar }); 
    // res.send('hello world');
    // res.render(__dirname.toString() +'./public/index.html');
    // res.sendFile(path.join())
});

app.listen(port);
