require("dotenv").config();
const db = require("./lib/database")

const Product = require("./models/Product")

const categories = require('./router/categories')
const users = require('./router/users')
const teams = require('./router/teams')
const tasks = require('./router/tasks')
const errorHandler = require("./middleWare/errorHandler")


const express = require("express");

const server = express();

const port = process.env.PORT

server.listen(port, ()=> console.log(`server port ${port}`))

const loggingMiddleware = require("./middleWare/loggingMiddleware");
const authCheck = require('./middleWare/authCheck');


server.use(loggingMiddleware)
/* server.use(authCheck) */

server.use(express.json())


server.use("/categories", categories);
server.use("/teams", teams);
server.use("/tasks", tasks);
server.use("/users", users);


server.post("/product" ,async (req, res, next) => {
    try {
        const new_product = await Product.create_product("another product_name", 52255)
        res.status(201).json(new_product)
    } catch (error) {
        next(error);
    }
})

server.get("/product", async (req, res, next) =>{
    try {
        const products = await Product.find();
        res.status(200).send(products)
    } catch (error) {
        next(error);
    }

})


server.patch("/product/:productId", async (req, res, next) =>{
    const updateProduct = await Product.updateProduct(req.params.productId, {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
    })
})

server.get("/products/:productId", async (req, res, next) => {
    try {
        const user = await Product.read_product(req.params.productId);
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }    
})


server.delete("/product/:productId", async (req, res, next) => {
    try {
        await Product.removeProduct(req.params.productId)
        res.status(204).end()
    } catch (error) {
        next(error);
    }
});



server.use((req, res) => res.status(404).end("check your target"))

server.use(errorHandler)