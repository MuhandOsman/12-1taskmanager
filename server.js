require("dotenv").config();
const db = require("./lib/database")

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



server.use((req, res) => res.status(404).end("check your target"))

server.use(errorHandler)