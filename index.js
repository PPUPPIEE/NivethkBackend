const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

var port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

const getProvince = require('./route/getProvince')
const postAddlocation = require('./route/postAddlocation')
const search = require('./route/search');

mongoose.connect("mongodb+srv://NewXI:NewXI@cluster0.xthd5.mongodb.net/where")
.then(()=>console.log("DB connect Successful"))
.catch((err)=>{console.log(err)});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use("/api/province",getProvince)
app.use("/api/addlocation",postAddlocation)
app.use("/api/search",search)
app.listen(port,()=>{
    console.log("Server is running on port 5000");
})