require('dotenv').config()

const express = require('express');
const generateKeyBuffer = require('../helpers/generateKeyBuffer')
const verifyRedirectToken = require('../controllers/login-controller')
const redirectToken = require('../helpers/generateRedirectToken')
const router = express.Router();

const { DEV_NAME_1, DEV_NAME_2, DEV_NAME_3, DEV_NAME_4, PRIVATE_KEY } = process.env

router.post('/verify-redirect-token', verifyRedirectToken.verifyRedirectToken)

router.post('/generate-redirect-token', (req, res, next) => {
    const email = req.body.email
    let token;
    try {
        const privateKeyBuffer = generateKeyBuffer.generateKeyBuffer(PRIVATE_KEY)
        token = redirectToken.generateRedirectToken(privateKeyBuffer, email)
    } catch (err) {
        console.log(err)
    }
    res.status(201).json({ token: token, email: email })
})

router.post('/verify-dev-name', (req, res, next) => {
    const { name } = req.body
    switch (name) {
        case DEV_NAME_1:
        case DEV_NAME_2:
        case DEV_NAME_3:
        case DEV_NAME_4:
            res.json({ message: "Name is valid" })
            break;
        default:
            res.json({ message: "Name is invalid" })
    }
})

module.exports = router;