// const mongoose=require('mongoose');

// require("dotenv").config();

// const connectwithDb=()=>{
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     })
//     .then(() => {
//     console.log('DB connected successfully');
//   })
//     .catch((error)=>{
//         console.log("DB facing connection issue")
//         console.log(error)
//         process.exit(1)
//     })
// };
// module.exports=connectwithDb;



const mongoose = require('mongoose');
require('dotenv').config();
const connectwithDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connected successfully');
    return mongoose;  // return mongoose instance
  })
  .catch((error) => {
    console.error("DB facing connection issue", error);
    process.exit(1);
  });
};
module.exports = connectwithDb;