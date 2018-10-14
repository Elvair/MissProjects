const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/',(req,res,next) => {
  Project.find()
      .then( objProject => res.status(200).json(objProject))
      .catch(e => next(e))
      
})

router.post('/',(req,res,next) => {
  const { name, birthday } = req.body;
  console.log(name, birthday, "entra");
  console.log(req.body);
  
  Project.create({
    name,
    birthday
  })
      .then( objProject => res.status(200).json(objProject))
      .catch(e => next(e))
})

module.exports = router;