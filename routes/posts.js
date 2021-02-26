const { json } = require('body-parser');
const express=require('express');
const router=express.Router();
const Post=require('../models/Post');

// gets all posts
router.get('/',async(req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});


//submits the post
router.post('/',async(req,res)=>{
    console.log('inside the post function');
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });

    try{
        const newPost=await post.save()
        res.status(201).json(newPost)
    }catch(err){
        res.status(400).json({message:err.message})
    }

})

//specific post
router.get('/:postId',async(req,res)=>{
    
    try{
        const post=await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err.message});
    }
})

//delete a specific post
router.delete('/:postId',async(req,res)=>{
    
    try{
        const removedPost=await Post.remove({_id:req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message:err.message});
    }
})

//update a post
router.patch('/:postId',async(req,res)=>{
    
    try{
        const updatedPost=await Post.updateOne({_id:req.params.postId},
            {$set:{title:req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json({message:err.message});
    }
})

module.exports=router;