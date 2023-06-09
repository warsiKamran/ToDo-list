const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));





app.get("/", function (req, res) {

    var today = new Date();
    
    var options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-us", options);

    res.render("list", {listTitle: day, newAdd: items});
});

app.get("/work", function(req,res){

    res.render("list", {listTitle: "New List", newAdd: workItems});
});

app.post("/", function(req,res){

    let item = req.body.newItem;

    if(req.body.btn === "New"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
