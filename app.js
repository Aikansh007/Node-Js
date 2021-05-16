//commonJS, every file is module(by default)
//Modules - Encapsulated Code(only share Minimum)


const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require("./6-alternative-flavour")
console.log(data);

sayHi('ashi');
sayHi(names.john);
sayHi(names.peter)