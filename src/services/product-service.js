const ProductRepository = require("../repository/product-repository");

class ProductService {
    constructor(){
        this.productRepository = new ProductRepository();
    }

    async bulkCreate(data){
        try {
            const products = this.productRepository.bulkCreate(data);
            return products;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProducts(){
        try {
            const products = this.productRepository.getAll();
            return products;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProductService;