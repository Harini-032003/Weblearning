//server
import express from "express";
const app=express(); //setting up our express server
const port=3000;

const today=new Date("Sept 09,23");
const day=today.getDay(); //gets day as value from 0-6. e.g if today is tuesday, it returns 2 ,if sunday returns 0.
let type="weekday";
let adv="its time to workhard";

if(day===0 || day===6){
  type="weekend";
  adv="its time to have fun";
}
app.get("/",(req,res)=>{ //get method used here(like other methods are post)("/"->server accepts req from this path(home route))
  res.render("index.ejs",{dayType:type,advice:adv}); //render means send to(filename,data as object)
});
app.listen(port,()=>{ //server waiting to listen on port 3000,when it is set up,it executes the function
  console.log(`server running on port${port}.`);
});