const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// router.get('/:templates',(req,res,next) => {
  // 
  //  
  // Project.find(`${author, template}`)
  // .then()
// })

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

module.exports = router;