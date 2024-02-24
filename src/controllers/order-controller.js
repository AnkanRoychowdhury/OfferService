const OrderService = require("../services/order-service");
const { ErrorLogger, Logger } = require("../utils/logger");

const orderService = new OrderService();

const createOrder = async (req,res) => {
    Logger.info(`Order creation request => /api/orders/create from ${req.body.orderedBy}`);
    try {
        const response = await orderService.createOrder({
            orderId: req.body.orderId,
            orderTotal: req.body.orderTotal,
            orderedBy: req.body.orderedBy,
            products: req.body.products
        });
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully Order Created',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create Order',
            err: error
        });
    }
}

const payUsingRazorpay = async (req,res) => {
    Logger.info(`Razorpay initiated request => /api/orders/payments`);
    try {
        const response = await orderService.payUsingRazorpay(req.body.orderTotal);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully Opened Razorpay',
            err: {}
        });
    } catch (error) {
        ErrorLogger.error(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to open Razorpay',
            err: error
        });
    }
}

module.exports = {
    createOrder,
    payUsingRazorpay
}