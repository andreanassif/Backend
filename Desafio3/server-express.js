const Contenedor = require("./archivo3.js");

const express = require('express');

const app = express();
const Products = new Contenedor("./products.txt")

app.get("/products",(req, res)=>{
    
    res.send(Products.getAll())
})

app.get("/productRandom",(req, res)=>{

    res.send(Products.getById())
})

app.listen(8080, ()=>{
    console.log("server express active on port 8080")
})