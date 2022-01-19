const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }, 
} ,{
        versionKey: false,
    })
const Task = mongoose.connection.model("Task", schema);

async function create({ name, description, order ,date}) {
    const newTask = new Task({
        name,
        description,
        order,
        date,
    });

    return await newTask.save();
}

async function readAll() {
    return await Product.find();
}

async function readPage(pageNumber = 1, pageSize = 20) {
    // with console.time() we can track the time it takes to perform certain tasks
    // it starts with console.time() and ends with console.timeEnd()
    console.time("readPage");
    // we use our readAll() function here in order to not repeat the code
    //const tasks = await readAll();
    const startIndex = (pageNumber - 1) * pageSize;
    // with skip(x) we ignore the first x documents
    // and with limit(y) we return only the next y documents

    const tasks = await Task.find().skip(startIndex).limit(pageSize)
    // this line stops the timer "readPage" and logs the time in the terminal
    console.timeEnd("readPage");
    return tasks;
}

async function removeAll() {
    await Task.deleteMany();
}

module.exports = {create , readAll,readPage,removeAll}