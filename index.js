const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require("./config/mongoose")
const bodyParser = require("body-parser");

const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json());

app.use(express.static(__dirname + '/assets'));

app.use(expressLayouts);
app.set('layout', 'layouts')

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use("/",require("./routes/index"));

app.listen(port, (req,res)=>{
    console.log("Server running at port:", port);
})