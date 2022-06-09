const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
})

app.listen(3000, function(){
    console.log("Server started at port 3000");
})



// 81e16c6aa6935055005cb8ac06233a6c-us17  :- api key
// df9f721534 :- Unique id for List.