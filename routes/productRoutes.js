const router = require('express').Router();
const productController = require('../controller/productController')

router.post('/create', productController.createProduct)

// fetch all products
router.get('/get_all_products', productController.getAllProducts)

// single product 
router.get('/get_single_product/:id', productController.getSingleProduct)

module.exports = router 