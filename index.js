// const express=require('express')
// const app=express();
// const resumePlugin = require('../resume-filter-plugin');
// require("dotenv").config();

// const connectwithDb=require("./config/database")
// connectwithDb();
// const PORT=process.env.PORT || 3000;

// app.use(express.json());

// const blog=require("./routes/blog")
// app.use('/api/resumes',resumePlugin);

// mount 
// app.use('/api/v1',blog);

// app.listen(PORT,()=>{
//     console.log(`api is running successfully- ${PORT}`);
// })

// app.get("/",(req,res)=>{
//     res.send(`<h1>This is my home page</h1>`)
// })


// const app = express();
// const resumePlugin = require('../resume-filter-plugin');
// require("dotenv").config();
// const connectwithDb = require("./config/database");
// const PORT = process.env.PORT || 3000;
// app.use(express.json());
// const blog = require("./routes/blog");
// connectwithDb()
//   .then(() => {
//     app.use('/api/resumes', resumePlugin);
//     app.use('/api/v1', blog);
//     app.get("/", (req, res) => {
//       res.send(`<h1>This is my home page</h1>`);
//     });
//     app.listen(PORT, () => {
//       console.log(`API is running successfully on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to connect to DB", err);
//   });


// connectwithDb()
//   .then((mongooseInstance) => {
//     // If your plugin can accept mongoose instance, pass it here
//     const resumePlugin = require('../resume-filter-plugin')(mongooseInstance);
//     app.use('/api/resumes', resumePlugin);
//     app.use('/api/v1', blog);
//     app.get("/", (req, res) => {
//       res.send(`<h1>This is my home page</h1>`);
//     });
//     app.listen(PORT, () => {
//       console.log(`API is running successfully on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to connect to DB", err);
//   });


const express=require('express')
const app=express();
require('dotenv').config();
const connectwithDb = require('./config/database');
const blog = require('./routes/blog');
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectwithDb()
  .then((mongooseInstance) => {
    // Import plugin and pass mongoose instance
    const resumePlugin = require('../resume-filter-plugin')(mongooseInstance);
    app.use('/api/resumes', resumePlugin);
    app.use('/api/v1', blog);
    app.get("/", (req, res) => {
      res.send(`<h1>This is my home page</h1>`);
    });
    app.listen(PORT, () => {
      console.log(`API is running successfully on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
  });
