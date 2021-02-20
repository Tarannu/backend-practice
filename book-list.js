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

//get book by status
app.get('/books/:sta',(req,res)=>{
    
    const book=books.find(c=>c.sta===req.params.sta);
    if(!book){
        res.status(404).send('The book given with the status was not found')
    }
    res.send(book);
});

//post book
app.post('/books',(req,res)=>{
    //prevent duplicate books
    const book={
        id:books.length+1,
        bookName:req.body.bookName,
        authorName:req.body.authorName,
        sta:req.body.sta
    }
    books.push(book);
    res.send(book);
});

//delete book
app.delete('/books/:id',(req,res)=>{
    const book=books.find(c=>c.id===parseInt(req.params.id));
    if(!book) res.status.send('The course with the given Book name was not found');


    const index=books.indexOf(book);
    books.splice(index,1);

    res.send(book);
})

//put status
app.put('/books/:bookName',(req,res)=>{
    const book=books.find(c=>c.bookName===req.params.bookName);
    if(!book) res.status.send('The course with the given Book name was not found');
    
    //validate

    //update
    book.sta=req.body.sta;
    res.send(book);
});

//PORT
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port} ... `));
