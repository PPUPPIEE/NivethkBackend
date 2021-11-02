const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

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

app.use("/api/province",getProvince)
app.use("/api/addlocation",postAddlocation)
app.use("/api/search",search)
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})