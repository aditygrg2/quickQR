const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile',usersController.profile);
router.get('/signin',usersController.in);
router.get('/signup',usersController.up);
router.post('/create', usersController.create);
router.post('/create-session',usersController.createSession);
router.get('/signout',usersController.signout);

module.exports = router;