import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

app.use(morgan("tiny")); //("combined")or("tiny") => output format,.ie how much info i want about the req-(large or tiny) 

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// we can put a post req on postman and run it without coding the post handler here. the terminal displays info as
// POST /404(as handler not present) 140 - 1.814(execution time)
