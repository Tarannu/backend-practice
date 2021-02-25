const express=require('express');
const mongoose=require('mongoose');
require('dotenv/config');

const app=express();

//Routes
app.get('/',(req,res)=>{
    res.send('We are on home');
    
});
//connect to db
mongoose.connect(
process.env.DB_CONNECTION,
{  useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true},
()=>console.log("connected to mongodb"));

//how do we start listening to the server
app.listen(3000);
