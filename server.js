const express = require("express");
const app = express();

const port = 3000; 
console.log('\tServer started at port:' + port);

// console.log('__dirname', __dirname);

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get("/", function (req, res) {

    res.render('index.html');
    // res.send('hello world');
    // res.render(__dirname.toString() +'./public/index.html');
    // res.sendFile(path.join())
});

app.listen(port);
