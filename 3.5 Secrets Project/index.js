//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const app=express();
  const port=3000;
  var userIsAuthorised=false;

  app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req,res,next){ //custom middleware to check password
   const password=req.body["password"]; //["password"]-> name of input password input tag in html
   if(password==="ILoveProgramming"){
     userIsAuthorised=true;
   }
   next();
}
  app.use(passwordCheck);

  app.get("/", (req, res) => { //get the home page 
    res.sendFile(__dirname + "/public/index.html");
  });

 
app.post("/check", (req, res) => { //we have used post method in form
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html"); //if password is correct send the secret page
  } else {
    res.sendFile(__dirname + "/public/index.html"); //if password is incorrect then send the home page 
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

