const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const user = User

// Creat a user using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', "Enter a valid Name").isLength({ min: 3 }),
    body('email', "Enter a valid Email id").isEmail(),
    body('password', "Password must be atlist 5 character").isLength({ min: 5 }),

], async (req, res) => {

    // if there are errors, return Bad request and the errors -------> 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check whether the user with this email exists already ------->

    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry A user with this email already exists" })
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })

        // .then(user => res.json(user))
        // .catch(err => {
        //     console.log(err)
        //     res.json({ error: "please enter valid email id", message: err.message })
        // })

        res.json(user)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured!")
    }

})


module.exports = router 