//var generateName=require('sillyname'); //commonjs(CJS)
// import generateName from "sillyName"; //ESM
// var sillyName=generateName();
// console.log(`My name is ${sillyName}.`);

import superheroes from "superheroes"; //use the superheroes object from package superheroes

var superhero=superheroes.random();//use random method of superheroes object
console.log(`Iam a ${superhero}!`);