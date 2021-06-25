var express = require('express');
var router = express.Router();
const HomeController = require("../controllers/home_controller")

router.get('/', HomeController.index);
router.get('/cards', HomeController.cards);
router.get('/charts', HomeController.charts);

module.exports = router;
