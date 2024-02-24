const express = require('express');
const { createOrder, payUsingRazorpay } = require('../controllers/order-controller');

const router = express.Router();

router.post('/create', createOrder);
router.post('/payments', payUsingRazorpay);

module.exports = router;