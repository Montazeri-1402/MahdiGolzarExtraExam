var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const allProject = [{ id: 1, title: "projectA" }, { id: 2, title: "projectA" }, { id: 3, title: "projectA" }]
    res.send(allProject)
});





module.exports = router;