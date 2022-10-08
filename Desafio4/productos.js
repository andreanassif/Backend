const express = require("express");
const Contenedor = require("../Desafio4/contenedorProductos");
const productsRouter = express.Router();

const contenedorProductos = new Contenedor("products.txt");

productsRouter.get("/", async(req, res)=>{
    try {
        const products = await contenedorProductos.getAll();
        console.log(products)
        res.send(products)
    } catch (error) {
        res.status(500).send("Hubo error en el servidor")
    }
})

productsRouter.get("/:id", async(req, res)=>{
    const {id} = req.params;
    const product = await contenedorProductos.getById(parseInt(id));
    if(product){
        res.json({
            message: "producto encontrado",
            product: product
        })
    } else {
        res.json({
            message: "producto no encontrado"
        })
    }
})

productsRouter.post("/", async(req,res)=>{
    console.log("body", req.body);
    const newProduct = req.body;
    const productosActualizados = await contenedorProductos.save(newProduct);
    res.json({
        message: `El producto fue creado`,
        response: productosActualizados
    })
 })

productsRouter.put("/:id", async(req,res)=>{
    const {id} = req.params;
    const newInfo = req.body;
    const productosAct = await contenedorProductos.updateById(parseInt(id),newInfo);
    res.json({
        message:`El producto con el id ${id} fue actualizado`,
        response: productosAct
    })
})

productsRouter.delete("/:id", async(req,res)=>{
    const {id} = req.params;
    const prod = await contenedorProductos.getById(parseInt(id));
    console.log(prod);
    if(prod.length>=0){
        const data = await contenedorProductos.deleteById(parseInt(id))
        return res.status(202).send(data)
    } else {
        return res.status(404).send("El producto no existe")
    }
})

productsRouter.get("/home",(req,res)=>{
    res.send("peticion home")
})

module.exports = productsRouter;