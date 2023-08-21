const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
// const user = User


const JWT_SECRET = 'Gauravisagoodb$oy'






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

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        // create a new user 
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET)


        // res.json(user)
        res.json({ authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured!")
    }

})


module.exports = router 