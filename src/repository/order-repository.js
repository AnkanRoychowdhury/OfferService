const { Order } = require("../models/index");
const { ErrorLogger } = require("../utils/logger");

class OrderRepository {

    async createOrder(orderData, products){
        try {
            const order = await Order.create(orderData);
            await order.addProducts(products);
            return order;
        } catch (error) {
            if(error.name === 'SequelizeUniqueConstraintError'){
                ErrorLogger.error(error.errors[0].type);
            }
            throw error;
        }
    }
}

module.exports = OrderRepository;