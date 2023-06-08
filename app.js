const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "index.html");

    var today = new Date();
    
    var options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-us", options);
    
    res.render("list", {kindOfDay: day});
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
