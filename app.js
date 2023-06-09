const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "index.html");

    var today = new Date();
    
    var options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-us", options);

    res.render("list", {kindOfDay: day, newAdd: items});
});

app.post("/", function(req,res){

    var item = req.body.newItem
    items.push(item);

    res.redirect("/");
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
