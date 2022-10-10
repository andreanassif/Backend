const fs = require('fs')

class Contenedor {
    constructor(productFile){
        this.productFile = productFile;
    }

    async save (product) {
        try {
            if(fs.existsSync(this.productFile)){
                const contenido = await fs.promises.readFile(this.productFile,"utf-8");
                if(contenido){
                    const products = JSON.parse(contenido);
                    const lastIdAdded = products.reduce((acc, item)=>item.id > acc ? acc = item.id : acc, 0);
                    const newProduct = {
                        id: lastIdAdded+1,
                        ...product
                    }
                    products.push(newProduct);
                    await fs.promises.writeFile(this.productFile, JSON.stringify(products, null, 2))
                } else {
                    const newProduct={
                        id:1,
                        ...product
                    }
                    await fs.promises.writeFile(this.productFile, JSON.stringify(newProduct, null, 2))

                }
            } else {
                const newProduct={
                    id:1,
                    ...product
                }
                await fs.promises.writeFile(this.productFile, JSON.stringify([newProduct], null, 2))   
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getById (id) {
        try {
            if(fs.existsSync(this.productFile)){
                const contenido = await fs.promises.readFile(this.productFile,"utf-8");
                if(contenido){
                    const products = JSON.parse(contenido);
                    const product = products.find(item=>item.id===id);
                    return product
                } else {
                    return "El archivo está vacío"
                } 
            } 
        } catch (error) {
            console.log(error)
        }
    }

    async getAll () {
        try {
            const contenido = await fs.promises.readFile(this.productFile,"utf8");
            const products = JSON.parse(contenido);
            return products
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById (id) {
        try {
            const contenido = await fs.promises.readFile(this.productFile,"utf8");
            const products = JSON.parse(contenido);
            const newProducts = products.filter(item=>item.id!==id);
            await fs.promises.writeFile(this.productFile, JSON.stringify(newProducts, null, 2));
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll () {
        try {
            await fs.promises.writeFile(this.productFile, JSON.stringify([]));
        } catch (error) {
            console.log(error)
        }
    }

    async putById (id,body) {
        try{
            const productos = await this.getAll();
            const productPos = productos.findIndex(elm=>elm.id === id);
            productos[productPos] = {
                id:id,
                ...body
            };
            await fs.promises.writeFile(this.productFile, JSON.stringify(productos, null, 2))//estanba this.nameFil => productFile
            return productos;
        } catch (error) {
            console.log(error)
        }
    }

}


module.exports = Contenedor;