const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/',(req, res, next)=>{
    const query = req.query
    console.log(query)
    Project.find(query)
        .then(projects => {
            console.log(projects)
            res.json(projects)
        })
}
)










module.exports = router;