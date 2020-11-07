var express = require('express');
var router = express.Router();

var mutantController = require("../controllers/mutantController")

/* POST mutant */
router.post('/', mutantController.isMutant);

module.exports = router;
