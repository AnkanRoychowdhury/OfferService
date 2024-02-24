const express = require('express');
const { bulkCreate, getProducts } = require('../controllers/product-controller');

const router = express.Router();

router.post('/bulk', bulkCreate);
router.get('/fetch', getProducts);

module.exports = router;