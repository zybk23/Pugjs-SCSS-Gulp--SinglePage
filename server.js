const express=require("express");
const path=require("path")

const app=express();

app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index",{
        title:"Your Gateway To A Richer Life"
    })
})

app.listen(5000,()=>{
    console.log("App Started")
})