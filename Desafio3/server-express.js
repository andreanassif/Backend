const Contenedor = require("./archivo3.js");

const express = require('express');

const app = express();
const listProducts = new Contenedor("./products.txt")


app.get("/products", async (req, res)=>{
    
    res.json(await listProducts.getAll())

})

app.get("/productRandom", async (req, res)=>{
    const allProducts = listProducts.getAll()
    let numRandom = Math.round(Math.random(1,allProducts.length)*10+1)
    console.log(numRandom)
    const idRandom = await listProducts.getById(numRandom)
    res.send(idRandom)
})

app.listen (8080, ()=>{
    console.log("server express active on port 8080")
})