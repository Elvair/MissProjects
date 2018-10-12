// He utilizado de base el archivo auth.js de la misma carpeta


const express = require('express');
const router  = express.Router();
const mongoose = require ('mongoose');
//const bcrypt = require('bcrypt');
const Project = require('../models/Project');
//const passport = require('passport');


const newProject = (req, project) => {
  
}



router.post('/templates', (req, res, next) => {

  const {templates, code} = req.body;

  Project.findOne({ id })
   .then( foundUser => {
     if (foundUser) throw new Error('Username already exists');

    return new Project({
      templates,
      code
    }).save();
  })
  //.then( savedUser => login(req, savedUser)) // Login the user using passport
  .then( project => res.json({status: 'successfully', project})) // Answer JSON
  .catch(e => next(e));
});


// router.post('/login', (req, res, next) => {
  // passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    // // if (err) next(new Error('Something went wrong')); 
    // // if (!theUser) next(failureDetails)

    // Return user and logged in
    // login(req, theUser).then(user => res.status(200).json(req.user));
// 
  // })(req, res, next);
// });

// 
// router.get('/currentuser', (req,res,next) => {
  // if(req.user){
    // res.status(200).json(req.user);
  // }else{
    // next(new Error('Not logged in'))
  // }
// })
// 
// 
// router.get('/logout', (req,res) => {
  // req.logout();
  // res.status(200).json({message:'logged out'})
// });
// 
// 
// router.use((err, req, res, next) => {
  // res.status(500).json({ message: err.message });
// })

module.exports = router;
