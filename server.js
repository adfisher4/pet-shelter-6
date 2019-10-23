const express = require("express"),
app = express(),
port = 8000,
server = app.listen(8000),
path = require("path");
//flash = require('express-flash'),
//session = require('express-session');
// app.use(session({
//     secret: "noneyobidness",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {maxAge: 60000}
// }));
//app.use(flash());
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json());

//app.set('view engine', 'ejs');
//app.set('views', __dirname + "/views");

require('./server/config/database');
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });