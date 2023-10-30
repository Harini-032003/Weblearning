import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => { //when the user hits home page, display a random activity
  try { //using axios to access the bored api server from our local server
    const response = await axios.get("https://bored-api.appbrewery.com/random"); // this waits until the post req made below
    const result = response.data; //response.data holds a random activity
    console.log(result);
    res.render("solution.ejs", { data: result }); //render home page(index.ejs)
  } catch (error) { //else throws error and handling the error
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const type = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`//using query filter the specified data. if type and participants="", then it means that filter is optional
    );
    const result = response.data; //returns an array of data
    console.log(result);
    res.render("solution.ejs", { //(filters the activity and displays the activity in the home page)
      data: result[Math.floor(Math.random() * result.length)], // chooses a random activity from array of activity
    });
  } catch (error) {
    console.error("Failed to make request:", error.message); //displays error message in console
    res.render("solution.ejs", { 
      error: "No activities that match your criteria.", // if error found, displays this error in index.ejs

    });
  }
});
// we gonna run nodemon index.js, its going to render index.ejs cuz it has the html and js template to be displayed
//here we used axios to access a public api server from our local server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
