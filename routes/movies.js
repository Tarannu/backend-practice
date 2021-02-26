const { json } = require('body-parser');
const express=require('express');
const router=express.Router();
const Movie=require('../models/Movie');

// gets all posts
router.get('/',async(req,res)=>{
    try{
        const movies=await Movie.find();
        res.json(movies);
    }catch(err){
        res.json({message:err})
    }
});


//submits the post
router.post('/',async(req,res)=>{
    console.log('inside the post function');
    const movie=new Movie({
        title:req.body.title,
        genre:req.body.genre,
        director:req.body.director,
        year:req.body.year,
        review:req.body.review,
    });

    try{
        const newMovie=await movie.save()
        res.status(201).json(newMovie)
    }catch(err){
        res.status(400).json({message:err.message})
    }

})

//specific post
router.get('/:id',async(req,res)=>{
    
    try{
        const movie=await Movie.findById(req.params.id);
        res.json(movie);
    }catch(err){
        res.json({message:err.message});
    }
})

//delete a specific post
router.delete('/:id',async(req,res)=>{
    
    try{
        const removedMovie=await Movie.remove({_id:req.params.id});
        res.json(removedMovie);
    }catch(err){
        res.json({message:err.message});
    }
})

//update a post
router.patch('/:id',async(req,res)=>{
    
    try{
        const updatedReview=await Movie.updateOne({_id:req.params.id},
            {$set:{review:req.body.review}});
        res.json(updatedReview);
    }catch(err){
        res.json({message:err.message});
    }
})

module.exports=router;