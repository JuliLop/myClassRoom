const express = require('express')
const router = express.Router()

// -- importemos el controlador que nos trae las funciones
const productsControllers = require('../controllers/ProductsController')

console.log(productsControllers)

router.get('/get-product', productsControllers.getProducts)



// Mostrar todos los productos