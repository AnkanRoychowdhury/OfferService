const CrudRepository = require("./crud-repository");
const { Product } = require('../models/index')

class ProductRepository extends CrudRepository {
    constructor(){
        super(Product)
    }
}

module.exports = ProductRepository;