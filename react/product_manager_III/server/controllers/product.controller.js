const Product = require('../models/product.model');

// Show all Products
module.exports.showAllProducts = (req, res)=> {
    Product.find()
        .then(foundProducts => res.json({data: foundProducts}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Create a new Product
module.exports.createOneProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({data: newProduct}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Find one Product
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(foundProduct => res.json({data: foundProduct}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Update Product by _id
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate ({_id:req.params.id}, req.body, {new: true, runValidators: true}) //set the new option to true to return the document after update was applied
        .then(updatedProduct => res.json({data: updatedProduct}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Delete Product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json({data: deletedProduct}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}