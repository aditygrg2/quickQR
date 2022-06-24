const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const postController = require('../controllers/postController');
console.log("Router Loaded!");

router.get('/',homeController.home);
router.use('/users',require('./users'));
router.get('/posts',postController.postimg);
router.use('/likes',require('./likes'));
module.exports = router;