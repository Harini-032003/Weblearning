import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){ //creating our own middleware by writing a function for it
   console.log("Request method:", req.method); //when we use logger it displays the req method

   console.log("Request URL:",req.url);//also displays req url
   next(); //to move onto the next step (include this compulsorily)
}
app.use(logger); //using the middleware function we created

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
