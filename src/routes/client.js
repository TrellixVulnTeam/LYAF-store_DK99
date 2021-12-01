const express = require('express');
const route = express.Router();
const ClientController = require('../app/controllers/ClientController');
const authen = require('../middleware/authen')
route.get('/', authen.authen, ClientController.client);
route.get('/product/detail/:id', ClientController.productDetail);
route.get('/product/collection', ClientController.productCollection);
route.post('/search', ClientController.search);
route.get('/404',ClientController.notfound)
module.exports = route;