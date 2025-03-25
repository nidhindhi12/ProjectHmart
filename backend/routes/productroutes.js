const express = require('express');
const router = express.Router();
const { newproduct, readallproduct, updateproduct, deleteproduct } = require('../controller/product_controller')


router.post('/', newproduct);
router.get('/readproduct', readallproduct);
router.put('/updateproduct/:id', updateproduct);

router.delete('/deleteproduct/:id', deleteproduct);

module.exports = router;
