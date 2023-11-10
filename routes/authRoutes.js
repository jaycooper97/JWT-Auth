const {Router} = require('express');
const authController = require('../controllers/authControllers')
const router = Router();

//sign up
router.get('/signup', authController.signup_get);

//post sign up
router.post('/signup', authController.signup_post);

//log in
router.get('/login', authController.login_get);

//post log in
router.post('/login', authController.login_post);

//Log out
router.get('/logout', authController.logout_get);

//post log out

module.exports = router;