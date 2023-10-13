const express = require('express');
const path = require('path');



const app = express();
const port = 8000;

app.use(express.static(__dirname + '/assets'));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.listen(port, (req,res)=>{
    console.log("Server running at port:", port);
})