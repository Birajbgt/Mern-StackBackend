const router = require('express').Router();
const productController = require ('../controller/productController')

router.post('/create', productController.createProduct)

module.exports = router 