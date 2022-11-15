require('dotenv').config()
const jwt = require('jsonwebtoken');
const generateKeyBuffer = require('../helpers/generateKeyBuffer')

const verifyRedirectToken = (req, res, next) => {
    const redirectToken = req.body.redirectToken
    const publicKeyBuffer = generateKeyBuffer.generateKeyBuffer(process.env.PUBLIC_KEY)
    const accessToken = jwt.verify(redirectToken, publicKeyBuffer)
    res.json({accessToken: accessToken})
};

exports.verifyRedirectToken = verifyRedirectToken;