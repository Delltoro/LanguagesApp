import express from 'express';
const router = express.Router();
const {User , validate} = require('../model/user');
// p '
router.post('/' , async(req,res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

   let user =  User.findOne({email: req.body.email})
   if(user) return res.status(400).send('An error occured , user registered');

   user = new User({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       experience: 0
   })
})

module.exports = router;
