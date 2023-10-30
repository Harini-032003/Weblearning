import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "harini";
const yourPassword = "yuva";
const yourAPIKey = "37898f00-22d9-4474-94d7-1d513ae112a7";
const yourBearerToken = "f65bf439-7a2a-4f0f-af4d-8b13b16f3702";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try {
    const result = await axios.get(API_URL + "/random"); //the url remains same ,we are adding the endpoint /random. we have already defined the api url above
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
    res.render("index.ejs", { content: JSON.stringify(result.data) }); //the data we get back is in js object form,turn them to JSON string
  } catch (error) {
    res.status(404).send(error.message);
  }

});

app.get("/basicAuth", async(req, res) => { //basic auth is not working,cant find what's the issue
  //TODO 3: Write your code here to hit up the /all endpoint
  try {
    const result = await axios.get(
      API_URL + "/all?page=2", //endpoint here is all and the query is we want to rettrieve page 2
      {},
      {
        //HINT: This is how you can use axios to do basic auth:
        // https://stackoverflow.com/a/74632908
        auth: { // the authentication required for this endpoint is basic,so we have to provide the username and password. we have already defined our username and pass above,send the value to endpoint as auth:{ uname:"",pass:""} object
          username: yourUsername,
          password: yourPassword,
        },
      }
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }

});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  try {
      //Filter for all secrets with an embarassment score of 5 or greater
    const result = await axios.get(API_URL + "/filter", {
      params: { //we want to filter the data we need which has score 5(queries)
        score: 5,
        apiKey: yourAPIKey, //give the api key as parameter which we have defined at the top. pass the as parameter
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }


});
//HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
