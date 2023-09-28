const fs = require("fs");

fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("message.txt", "utf8", (err, data) => {  //callbacks error and data from the file
  if (err) throw err;
  console.log(data);
});
