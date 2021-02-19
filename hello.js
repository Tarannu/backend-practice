const express=require('express');
const Joi=require('joi');
const app=express();
app.use(express.json());

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}

]

app.get('/',(req,res)=>{

    res.send('hello world!!');

})

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

// /api/courses/1
app.post('/api/courses/:id',(req,res)=>{
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send('Name is required and should be 3 characters');
        return;
    }

    const course={
        id:courses.length+1,
        name:req.body.name
    };

    courses.push(course);
    res.send(course);

});

//PORT
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port} ... `));
