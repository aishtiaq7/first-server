const express = require("express");
const app = express();

const port = 3000; 
console.log('\tServer started at port:' + port);

// console.log('__dirname', __dirname);

app.set('views', __dirname + '/views');
app.engine('ejs', require('ejs').renderFile);

app.get("/", function (req, res) {
    console.log('get - / logs');
    
    
    var ejsVar = 'awshaf'; 
    res.render('index.ejs', { ejsVar }); 
    
    
});
app.get("/gg", function (req, res) {
    console.log('get - / gg');

    var ejsVar = 'gg'; 
    res.render('index.ejs', { ejsVar }); 
    
    
});

app.listen(port);
