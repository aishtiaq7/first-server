const express = require("express");
const app = express();
const path = require ('path');

const port = 3001; 
console.log('\tServer started at port:' + port);


app.set('views',path.join(__dirname, "views")); 
app.set("view engine", 'ejs');

app.use(express.static(__dirname +"/public"));

app.get("/", function (req, res) {
    console.log('get - /');
    var ejsVar = 'HELLO WORLD'; 
    res.render('index.ejs', { ejsVar }); 
}); 


app.get("/users", function (req, res) {
    console.log('get - / users');
    // var ejsVar = 'USEssssAME'; 
    // res.render('index.ejs', { ejsVar }); 

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.json([
        { id: 1, username: "Awshaf" },
        { id: 2, username: "Fox" },
    ]);
});




app.listen(port);
