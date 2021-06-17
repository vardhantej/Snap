//This contains all the methods being used in post routes

import  mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts= async (req,res)=>{
    try {
       
        const postMessages= await PostMessage.find();
        res.status(200).json(postMessages); // json() sends a JSON response
            
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost= async (req,res)=>{
   const post = req.body;
   
    const newPost= new PostMessage({...post, creator:req.userId, createdAt: new Date().toISOString()});
   
   try {
       await newPost.save(); //Each document can be saved to MongoDB using save()
       
       res.status(201).json(newPost);
   } catch (error) {
       res.status(409).json({message: error.message});
   }
}

export const updatePost=async (req,res)=>{
    const {id: _id} =req.params;
    const post= req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send('No post with that id');}

    const updatedPost= await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});

    res.json(updatedPost);    
}

export const deletePost= async (req,res)=>{
    const {id} = req.params;
    const post= req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No post with that id');
    }

    await PostMessage.findByIdAndRemove(id);        
    res.json({message: 'Post deleted successfully'});
}

export const likePost= async (req,res)=>{
    const {id}=req.params;

    //with the help of custom 'auth' middleware, checking for authentication
    if(!req.userId){
        return res.status(404).json({message: "Unauthenticated"});
    }

   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No post with that id');
    }

    const post= await PostMessage.findById(id);

    //Ensuring only one like for one user
    const index= post.likes.findIndex((id)=> id===String(req.userId));
    if(index===-1){ // When no such id is present in likes array
        //like post 
        post.likes.push(req.userId); 

    }else{
        //dislike post
        post.likes = post.likes.filter((id)=>id!==String(req.userId)); //return all ids except the user's id

    }

    const updatedPost= await PostMessage.findByIdAndUpdate(id,post, {new: true});

    res.json(updatedPost);
}