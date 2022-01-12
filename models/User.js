const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    age:{
        type: Number,
        required: true,
        validate : v => (v >= 18 && v <= 101),
    },
    password:{
        type: String,
        required: true,
    }
});

const User = mongoose.connection.model("User",schema);

// Read 

async function createUser({userName,email,age,password}) {
    const newUser = new User ({
        userName,
        email,
        age,
        password,
    })
    return await newUser.save()
}


async function readUser() {
    return await User.find() 
}


async function updateUser() {
     
}



async function deleteUser() {
     
}







module.exports = {createUser, updateUser, deleteUser, readUser}