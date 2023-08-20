const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const user = User

// Creat a user using: POST "/api/auth". doesn't require Auth
router.post('/', [
    body('name', "Enter a valid Name").isLength({ min: 3 }),
    body('email', "Enter a valid Email id").isEmail(),
    body('password', "Password must be atlist 5 character").isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({ error: "please enter valid email id", message: err.message })
        })
})


module.exports = router 