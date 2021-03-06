const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


router.get('/',(req,res,next) => {
  
  Project.find()
      .then( objProject => res.status(200).json(objProject))
      .catch(e => next(e))
      
})

router.post('/',(req,res,next) => {
  const { template, code } = req.body;
  console.log(template, code, "entra");
  console.log(req.body);
  
  Project.create({
    template,
    code
  })
      .then( objProject => res.status(200).json(objProject))
      .catch(e => next(e))
})

router.get('/:templates',(req,res,next) => {
  Project.find({templates: req.params.templates})
    .then(templateOne =>{
      res.json(templateOne)
    })
})

module.exports = router;