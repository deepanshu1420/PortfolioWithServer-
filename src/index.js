const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 3000;


const staticPath = path.join(__dirname , "../public");
const dynamicPath = path.join(__dirname ,"../template/views");
const registerPartialsPath = path.join(__dirname ,"../template/partials");
app.use(express.static(staticPath));
app.set("view engine" , "hbs");
app.set("views" , dynamicPath);

hbs.registerPartials(registerPartialsPath);
app.get("/" ,(req,res)=>{
    // res.send("<h1>Hello from node side .....</h1>")
    res.render("index" , {text : "Software"});
})

app.get("/about" ,(req,res)=>{
    // res.send("<h1>Hello from node side .....</h1>")
    res.render("about");
})

app.get("/contact" ,(req,res)=>{
    // res.send("<h1>Hello from node side .....</h1>")
    res.render("contact");
})
app.get("/service",(req,res)=>{
    res.render("service");
})
app.get("*" , (req,res)=>{
    res.status(404).render("404");
})
app.listen(port , ()=>{
    console.log("server is active at 3000 port number");
})