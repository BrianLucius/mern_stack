const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    //Display all Products
    app.get("/api/products", ProductController.showAllProducts);

    //Display one Product
    app.get("/api/products/:id", ProductController.findOneProduct);

    //Create new Product
    app.post("/api/products", ProductController.createOneProduct);

    //Update one Product
    app.put("/api/products/:id", ProductController.updateProduct);

    //Delete one Product
    app.delete("/api/products/:id", ProductController.deleteProduct);
};