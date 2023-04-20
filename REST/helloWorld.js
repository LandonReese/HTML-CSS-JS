var express = require('express');
var app = express();


function sayHello(res) {
    res.send("Hello world!");
}


app.get('/', (req, res) => {sayHello(res)})
// app.get('/', function(req, res){ //when you do a get request to this path '/', do the send command
//     res.send("Hello World!");
// });

app.listen(3000);