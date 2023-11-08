const {Router} = require('express');
const authController = require('../controllers/authControllers')
const router = Router();

//signup
router.get('/signup', authController.signup_get);

//post signup
router.post('/signup', authController.signup_post);

//login
router.get('/login', authController.login_get);

//post login
router.post('/login', authController.login_post);

module.exports = router;