
//Product collection
import Product from '../model/product-schema.js'

export const getProducts = async(request, response) =>
{
    try
    {
        //to fetch all data, without any condn.
        const products = await Product.find({});

        response.status(200).json(products);
    }
    catch(error)
    {
        response.status(500).json({message: error.message });
    }
}
//import getProducts in route.js

export const getProductById = async ( request, response) => {
    try {
        const id = request.params.id;
        const product = await Product.findOne({ 'id': id })

        response.status(200).json(product);
    }
    catch(error)
    {
        response.status(500).json({message: error.message });
    }
}