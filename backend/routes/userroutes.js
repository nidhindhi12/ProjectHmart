const express = require('express');
const router = express.Router();


const { newuser, readalldata, updatedata, deletedata, login } = require('../controller/user_controller')


router.post('/', newuser);
router.get('/readalldata', readalldata);
router.put('/updatedata/:id', updatedata);
router.delete('/deletedata/:id', deletedata);
router.post('/loginuser',login)




module.exports = router;