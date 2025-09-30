exports.dummy=(req,res)=>{
    res.send('hello this is dummy page')
}

const Post=require("../model/postModel");

exports.createPost=async (req,res)=>{
   try{
    const {title,body}=req.body;
    const post=new Post({
        title,body,
    })
    const savedPost=await post.save();

    res.json({
        post:savedPost,
    })
   }
   catch{
    return res.status(400).json({
        error:"error while creating post",
    })
   }
}

exports.getAllPost=async (req,res)=>{
    try{
        const post=await Post.find().populate("likes").populate("comments").exec();
    res.json({
        post,
    })
    }
    catch(error){
       return res.status(400).json({
        error:"error in fetching data",
       })
    }
}