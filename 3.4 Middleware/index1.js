import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true})); //using the middleware bodyParser to fetch form(urlencoded) data.
//always use middleware before route handlers
app.get("/", (req, res) => {  
  res.sendFile(__dirname + "/public/index.html");//here we make a get request to get a html page. To get that html page,specify the path of html page since it is in your local pc.
});
 app.post("/submit",(req,res)=>{ // the info posted in form is displayed in console by accessing the request's body
  console.log(req.body); //try posting info through postman and localhost:3000 in browser
 });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
