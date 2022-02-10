const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
 app.use(express.json());
 const foodRoute= require('./routes/task'); 
 const cors = require('cors');

 app.use(cors({ origin: '*' , credentials :  true }));

app.use('/tasks',foodRoute); 



 //Routes // listening 

mongoose.connect("mongodb://localhost:27017/userdb1",() =>{ console.log("Connected to DB"); });

 app.listen(3001);