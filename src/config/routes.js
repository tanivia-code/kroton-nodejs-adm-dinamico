var express = require('express');
var router = express.Router();
const HomeController = require("../controllers/home_controller")

router.get('/', HomeController.index);
router.get('/login', HomeController.login);
router.get('/cards', HomeController.cards);

module.exports = router;
