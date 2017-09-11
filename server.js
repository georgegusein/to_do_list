const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//routes
let index = require('./routes/index');
let tasks = require('./routes/tasks');

const port = 3000;

const app = express();

//View engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set static folder for angular
app.use(express.static(path.join(__dirname,'client')));

//body parser for requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port,(err)=>{
    if(err) throw err;
    console.log("Listening to "+ port);
});