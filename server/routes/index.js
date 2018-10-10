const express = require('express');
const router  = express.Router();
const Project = require('../models/Project')

/* GET home page */
router.get('/', (req, res, next) => {
  Project.find({})
  .then((data)=>res.json(data))
});

module.exports = router;
