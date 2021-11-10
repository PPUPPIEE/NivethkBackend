const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

var port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

const getProvince = require('./route/getProvince')
const postAddlocation = require('./route/postAddlocation')
const search = require('./route/search')
const firebase = require('./route/firebase')
const patchStatus = require('./route/patchStatus')
const deletelocation = require('./route/deletelocation')
const showuncheck = require ('./route/showuncheck')
const getall = require('./route/getalllocation')
mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log("DB connect Successful"))
.catch((err)=>{console.log(err)});

app.use(cors());

app.use("/api/province",getProvince)
app.use("/api/addlocation",postAddlocation)
app.use("/api/search",search)
app.use("/api/firebase",firebase)
app.use("/api/updatestatus",patchStatus)
app.use("/api/deletelocation",deletelocation)
app.use("/api/showuncheck",showuncheck)
app.use("/api/getall",getall)

app.listen(port,()=>{
    console.log("Server is running on port 5000");
})