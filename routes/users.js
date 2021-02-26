const { json } = require('body-parser');
const express=require('express');
const router=express.Router();
const User=require('../models/User');

// gets all posts
router.get('/',async(req,res)=>{
    try{
        const users=await User.find();
        res.json(users);
    }catch(err){
        res.json({message:err})
    }
});


//submits the post
router.post('/',async(req,res)=>{
    console.log('inside the post function');
    const user=new User({
        name:req.body.name,
        email:req.body.email
    });

    try{
        const newUser=await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({message:err.message})
    }

})

//specific post
router.get('/:id',async(req,res)=>{
    
    try{
        const user=await User.findById(req.params.id);
        res.json(user);
    }catch(err){
        res.json({message:err.message});
    }
})

//delete a specific post
router.delete('/:id',async(req,res)=>{
    
    try{
        const removedUser=await User.remove({_id:req.params.id});
        res.json(removedUser);
    }catch(err){
        res.json({message:err.message});
    }
})

//update a post
router.patch('/:id',async(req,res)=>{
    
    try{
        const updatedUser=await User.updateOne({_id:req.params.id},
            {$set:{review:req.body.review}});
        res.json(updatedUser);
    }catch(err){
        res.json({message:err.message});
    }
})

module.exports=router;