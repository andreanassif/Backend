const fs = require('fs')

class Contenedor {
    constructor(productFile){
        this.productFile = productFile;
    }

    save = async(product)=>{
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
                    await fs.promises.writeFile(this.productFile, JSON.stringify([products], null, 2))
                } else {
                    const newProduct={
                        id:1,
                        ...product
                    }
                    await fs.promises.writeFile(this.productFile, JSON.stringify([newProduct], null, 2))

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

    getById = async(id)=>{
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

    getAll = async()=>{
        try {
            const contenido = await fs.promises.readFile(this.productFile,"utf8");
            const products = JSON.parse(contenido);
            return products
        } catch (error) {
            console.log(error)
        }
    }

    deleteById = async(id)=>{
        try {
            const contenido = await fs.promises.readFile(this.productFile,"utf8");
            const products = JSON.parse(contenido);
            const newProducts = products.filter(item=>item.id!==id);
            await fs.promises.writeFile(this.productFile, JSON.stringify(newProducts, null, 2));
        } catch (error) {
            console.log(error)
        }
    }

    deleteAll = async()=>{
        try {
            await fs.promises.writeFile(this.productFile, JSON.stringify([]));
        } catch (error) {
            console.log(error)
        }
    }
}

const listProducts = new Contenedor("./products.txt")

const product1 = {
    name: "Velador Espiraldo Mod7", 
    price: 1900, 
    img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-blanco-modelo7_vo5kef.jpg', 
}

const product2 = {
    name: "Velador Espiraldo Mod3", 
    price: 1900, 
    img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-on-fucsia-modelo3_gb9xaq.jpg'
}

const product3 = {
    name: "Velador Espiraldo Mod33", 
    price: 1900, 
    img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-naranja-modelo33_vtknpl.jpg'
}

const createProduct = async()=>{
    await listProducts.save(product1);
    await listProducts.save(product2);
    await listProducts.save(product3);
    //const resultId = await listProducts.getById(1);
    //console.log(resultId)
   const products = await listProducts.getAll();
   console.log(products)
    //await listProducts.deleteById(2);
    //await listProducts.save(product2);
    //await listProducts.deleteAll(); 
}

createProduct();