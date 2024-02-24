const { RAZORPAY_KEY, RAZORPAY_SECRET } = require("../config/serverConfig");
const OrderRepository = require("../repository/order-repository");
const Razorpay = require('razorpay');

class OrderService {
    constructor(){
        this.orderRepository = new OrderRepository();
    }

    async createOrder(data) {
        try {
            const products = data.products;
            // removing products field from incoming request data
            const {products: _, ...orderData} = data;
            const order = await this.orderRepository.createOrder(orderData, products);
            return order;
        } catch (error) {
            throw error;
        }
    }

    async payUsingRazorpay(orderTotal){
        try {
            const amount = orderTotal;
            // Create a razorpayInstance
            const razorpayInstance = new Razorpay({
                key_id: RAZORPAY_KEY,
                key_secret: RAZORPAY_SECRET,
            });
            const paymentOptions = {
                amount: amount * 100,
                currency: 'INR',
                receipt: `${this.#generateReceipt()}`,
            };
            const razorpayOrder = await razorpayInstance.orders.create(paymentOptions);
            return razorpayOrder;
        } catch (error) {
            throw error;
        }
    }

    #generateReceipt(){
        return Math.floor(Math.random() * 100 * 999);
    }

}

module.exports = OrderService;