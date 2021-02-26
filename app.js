const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');

const app=express();

app.use(bodyParser.json());

//import routes
const postsRoute=require('./routes/posts');

app.use('/Post',postsRoute);

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
