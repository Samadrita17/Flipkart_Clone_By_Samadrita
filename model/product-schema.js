//Validation of data using mongoose-->Using Scema function,available in mongoose

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true,  
        unique:true
    }, 
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description : String,
    discount: String,
    tagline: String
});

// product is the collection we are making (actual collection's name will be product(s)
const Product = mongoose.model('product',productSchema);

export default Product;