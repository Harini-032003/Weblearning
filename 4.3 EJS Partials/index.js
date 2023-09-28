import express from "express";

const app = express();
const port = 3000;

// Write your code here:
//Step 1: Render the home page "/" index.ejs//
app.use(express.static("public")); // do not forget to include the static files using express.static. these static files(images,css) are inside public folder
app.get("/",(req,res)=>{
  res.render("index.ejs"); //inside views folder,relative to views folder
});
app.get("/about",(req,res)=>{
  res.render("about.ejs"); // relative to views folder
});
app.get("/contact",(req,res)=>{ 
  res.render("contact.ejs"); //relative to views folder
});


// Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
