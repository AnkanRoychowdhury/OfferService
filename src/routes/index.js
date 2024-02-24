const express = require('express');
const orderRoutes = require('./order-routes');
const productRoutes = require('./product-routes')


const router = express.Router();

router.use('/orders', orderRoutes);
router.use('/products', productRoutes);

module.exports = router;