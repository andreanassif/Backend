const Contenedor = require("./archivo3.js");

const express = require('express');

const app = express();
const listProducts = new Contenedor("./products.txt")

app.get("/products",(req, res)=>{
    res.send(`Los productos son: ${listProducts.getAll()} `)   
})

app.get("/productRandom",(req, res)=>{

    res.send(`${listProducts.getById()}`)
})

app.listen (8080, ()=>{
    console.log("server express active on port 8080")
})