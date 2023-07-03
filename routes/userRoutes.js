const express=require('express')
const router=express.Router();
const {register,login,curr}=require('../controllers/userController');
const validateToken = require('../middlewares/validateTokenHandler');

router.route('/login').post(login);
router.route('/register').post(register);
router.get('/current',validateToken,curr);

module.exports=router;
