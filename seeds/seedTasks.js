require("dotenv").config();
require("../lib/database");

const mongoose = require("mongoose");
const faker = require("../lib/faker");
const Task = require("../models/Task");

const numSeedDoc = process.argv[2] || 100;

faker.seed(1234);

async function seed(){

    await Task.removeAll();

    for (let i=0; i<numSeedDoc ; i++) {
        await Task.create({
            name:faker.commerce.productName(),
            description:faker.commerce.productDescription(),
            order: i,
            date:faker.date.past(),
        })
    }
    mongoose.connection.close();
}  
seed();          
    