const ProductService = require("../services/product-service");
const { Logger } = require("../utils/logger");

const productService = new ProductService();

const bulkCreate = async (req,res) => {
    Logger.info(`Product create request => /api/products/bulk`);
    try {
        const response = await productService.bulkCreate(req.body.products);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully Created products',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create products',
            err: error
        });
    }
}

const getProducts = async (req,res) => {
    Logger.info(`Product Get request => /api/products/fetch`);
    try {
        const response = await productService.getProducts();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched products',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch products',
            err: error
        });
    }
}

module.exports = {
    bulkCreate,
    getProducts
}