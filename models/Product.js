const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    product_name: {
        type: String,
        unique: true,
        required: true
    },
    product_price: {
        type : Number,
        required: true
    }
})

const Product = mongoose.connection.model("Product", schema)

async function create_product (product_name,product_price ) {
    const new_product = new Product ({
        product_name,
        product_price
    } )
    return await new_product.save()
}

module.exports = {create_product};
