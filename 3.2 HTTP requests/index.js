import express from "express";

const app=express();
const port=3000;
 app.get("/",(req,res)=>{
  res.send("<h1>Hello</h1>");
 });

 app.get("/about",(req,res)=>{
  res.send("<h1>About Me</h1><p>This is Harini</p>");
 });
 
 app.get("/contact",(req,res)=>{ // "/" targets the page we want to retrieve
  res.send("<h1>Contact info</h1><p>ph no:863761452</p>");
 });

 app.listen(port,()=> {
  console.log(`server running on port ${port}.`);
 });