const express = require('express');
const router = express.Router();


const { newuser, readalldata, updatedata, deletedata, login, updatePassword, AuthVerify } = require('../controller/user_controller');
const Auth = require('../middleware/authverify');





router.post('/', newuser);
router.get('/readalldata', readalldata);
router.put('/updatedata/:id', updatedata);
router.delete('/deletedata/:id', deletedata);
router.post('/loginuser', login)
router.put('/updatepassword/:id', updatePassword);
router.post('/authverify',Auth,AuthVerify)




module.exports = router;