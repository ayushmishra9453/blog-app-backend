const express=require('express');
const router=express.Router();

const {dummy}=require("../controller/postContrller")
const {createComment}=require("../controller/commentController")
const {createPost,getAllPost}=require("../controller/postContrller")
const {likePost,unlikePost}=require("../controller/LikeController")
router.get("/dummy",dummy);
router.post("/comments/create",createComment)
router.post("/post/create",createPost)
router.get("/post",getAllPost)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)
module.exports=router;