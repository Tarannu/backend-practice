const express=require('express');
const Joi=require('joi');
const app=express();
app.use(express.json());

const books=[
    {id:1,bookName:'Harry POtter',authorName:'JKR',sta:'Read'},
    {id:2,bookName:'Pride and Prejudice',authorName:'Jane Autin',sta:'Reading'},
    {id:3,bookName:'Girl Online',authorName:'Zoe Sugg',sta:'unfinished'}
]

app.get('/',(req,res)=>{

    res.send('hello world!!');

})

app.get('/books',(req,res)=>{
    res.send(books);
});

// /api/courses/1
app.get('/books/:sta',(req,res)=>{
    
    const book=books.find(c=>c.sta===parseInt(req.params.sta));
    if(!book){
        res.status(404).send('The book given with the status was not found')
    }
    res.send(book);
});

//post book
app.post('/books',(req,res)=>{
    const book={
        id:books.length+1,
        bookName:req.body.bookName,
        authorName:req.body.authorName,
        state
    }
});

//PORT
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port} ... `));
