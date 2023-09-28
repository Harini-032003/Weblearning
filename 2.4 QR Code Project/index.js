
//1. Use the inquirer npm package to get user input.
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([ //prompt is an object which prompts the user to input and save it in name(variable kind of)
    /* Pass your questions in here */
    { message:"Type in your URL: ",
      name:"URL",
    },
  ])
  //2. Use the qr-image npm package to turn the user entered URL into a QR code image.
  .then((answers) => { //convert the url to image using qr-image
    // Use user input for... whatever!! //here we are converting it into qr-image
    var url=answers.URL; // as prompt is an object, we are accessing the input as answers.URL(the name in which we have stored)
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png')); //creates a png file and stores the image in png file

    //3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile("URL.txt", url, (err) => {  //now we are storing the URL the user gave in a txt file
      if (err) throw err;
      console.log("The file has been saved!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


