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

async function read_product (productId) {
    const product = await Product
    .findById(productId)
    .select(["_id", "product_name","product_price"]) // or in find({},["_id", "product_name","product_price"]) to exclude some property.can use ({}, "... ::: ---")or find({},{_id:0 ,product_price :0})

    return product ;
}

async function updateProduct (productId,{product_price , product_name} ) {
   return await Product.findByIdAndUpdate(productId , {
        product_price ,
         product_name,
    })
}

async function removeProduct (productId) {
  return  await Product.findByIdAndDelete(productId)
}

async function find (){
    return await Product.find()
}

module.exports = {create_product ,read_product, updateProduct,removeProduct, find};
