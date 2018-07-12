var moment  = require('moment');


console.log(moment().format());
var timestamp  =  23456789;
var current_time  =  moment.unix(timestamp);
console.log("current date", current_time.format());
