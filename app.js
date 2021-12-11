const express = require("express");
const bodyParser =require("body-parser");
const mongoose = require("mongoose");
const _=require("lodash");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

mongoose.connect("mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.hgiqf.mongodb.net/todolistDB",function(err){
  if(err){
    console.log(err);
  }
});


//Schema
const itemsSchema = new mongoose.Schema({
  name: String
});
const listsSchema = new mongoose.Schema({
  name:String,
  items:[itemsSchema]
});


//Models
const Item = new mongoose.model("Item", itemsSchema);
const List = new mongoose.model("List", listsSchema);



const item1 = new Item({
  name:"Welcome to my Todo List"
});
const item2 = new Item({
  name:"Press + to add an item to the list."
});
const item3 = new Item({
  name:"<-- to cross off the item from list."
});

const defaultItems = [item1,item2,item3];


app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


//ALL THE GET
app.get("/",function(req,res){
  Item.find({},(error,results)=>
  {
    if(results.length === 0){
      Item.insertMany(defaultItems,(err)=>{
        err?console.log(err):console.log("Default items added successfully")
      });
      res.redirect("/");
    }else{
      res.render("toDoList", {list:results,title:"Todo List"});
    }
  });
});
app.get("/about",function(req,res){
  res.render("about");
});
app.get("/:listName", function(req,res){
  const listName= _.capitalize(req.params.listName);
  List.findOne({name:listName},function(err,results){
    if(!err){
      if(!results){
        const list = new List({
                name:listName,
                items:defaultItems
              });
              list.save();
              res.redirect("/" + listName);
      }
      else{
          res.render("toDoList",{list:results.items,title:_.capitalize(results.name)})
      }
    }
  });
});

//ALL THE POST
app.post("/",function(req,res){

  const newItemName = req.body.addItem;
  const listOf = req.body.listOf;
  const newItem = new Item({
    name:newItemName
  });
  if(listOf==="Todo"){
    newItem.save();
    res.redirect("/");
  }else{
    List.findOne({name:listOf},(err,foundList)=>{
      foundList.items.push(newItem);
      foundList.save();
      res.redirect("/" + listOf);
    });
  }
});
app.post("/delete",function(req,res){
  const id=req.body.checkbox;
  const listOf=req.body.listOf;
  if(listOf==="Todo List"){
    Item.deleteOne({_id:id},(err)=>{
      err?console.log(err):  res.redirect("/");
    });
  }else{
    List.findOneAndUpdate({name:listOf},{$pull:{items:{_id:id}}},(err,foundList)=>{
        if(!err){
        res.redirect("/"+listOf);
        }
      });
    }
});

//LISTENING
let port = process.env.PORT;
if(port == null|| port == ""){
  port=3000;
}
app.listen(port,function(){
  console.log("Server started at port "+port);
});
