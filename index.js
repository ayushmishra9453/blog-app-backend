

const express=require('express')
const app=express();
require('dotenv').config();
const connectwithDb = require('./config/database');
const blog = require('./routes/blog');
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectwithDb()
  .then((mongooseInstance) => {
   
    const resumePlugin = require('../resume-filter-plugin/index')(mongooseInstance);
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
