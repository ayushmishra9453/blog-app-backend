const Post=require("../model/postModel");
const Comment=require("../model/commentModel")


exports.createComment= async(req,res)=>{
    try{
        // fetch data from req body
    const {post,user,body}=req.body;
      
    const comment = new Comment({
        post,user,body
    });
    //  save the new comment into the database
    const savedComment=await comment.save();

    // search for the post and update the comment

    const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
    .populate('comments')  //poplate the comment array with comment document
     .exec();
   res.json({
    post:updatedPost,
   })
    }
    catch(error){
    return res.status(500).json({
        error:"error while creating comment"});
    }
}

