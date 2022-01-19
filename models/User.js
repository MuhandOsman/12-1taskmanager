const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    city: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    streetNr:{
        type :Number
    }
})


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
    },
    address:addressSchema,
});


const User = mongoose.connection.model("User",schema);

// Read 

async function createUser({userName,email,age,password,address}) {
    const newUser = new User ({
        userName,
        email,
        age,
        password,
        address,
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