import express from "express";
import mongoose from "mongoose";

import notemessage from "../models/note.js";


const router = express.Router();

export const getpost = (req,res)=>
{
   notemessage.find()
    .then(messages => res.json(messages))
    .catch(err => res.status(400).json({message : err.message}))
}



export const createPost = async(req,res)=>
{
   const title = req.body.title;
   const content = req.body.content;
   const newPost = new notemessage({title, content});
   try {
      await newPost.save();
      res.status(201).json("Added");
   } catch (error) {
      res.status(409).json({message : error.message});
   }
}

export const deletePost = (req,res) =>
{
   notemessage.findByIdAndDelete(req.params.id)
     .then(() => res.json("deleted"))
     .catch(err => res.status(400).json({message : err.message}))

}

export const updatePost = (req,res) =>
{
   notemessage.findById(req.params.id)
     .then(note=>
      {
         note.title = req.body.title;
         note.content = req.body.content;
         note.save()
          .then(()=>res.json("updated"))
          .catch(err => res.status(400).json({message : err.message}))
      })
     .catch(err => res.status(400).json({message : err.message}))

}

export default router;