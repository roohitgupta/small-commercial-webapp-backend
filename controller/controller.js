const ProductSchema = require('../models/product.model');

const ProductForm = async (req, res)=> {
    const newProduct = new ProductSchema(req.body);
    try {
        const savedProduct = await newProduct.save();
        return res.status(200).json(savedProduct);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    ProductForm,

}