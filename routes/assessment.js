// For assessments, sending data back and forth from Mongo. 

// set-user-onboarding-data (post) 
// The initial survey contains the user info (user-profile in tranquilio-consumer database) and survey responses (assessments collection)
// * 2 mongo writes

// signup and login (post)

// get-top-three-stressors

//

require('dotenv').config()
const dbo = require("../conn");

const express = require('express');
const generateKeyBuffer = require('../helpers/generateKeyBuffer')
const verifyRedirectToken = require('../controllers/login-controller')
const redirectToken = require('../helpers/generateRedirectToken')
const router = express.Router();

const { DEV_NAME, PRIVATE_KEY } = process.env

router.get("/get-user-onboarding-data/:id", (req, res, next) => {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("user-profile").find({ name: req.params.id });
    cursor.toArray(function (err, result) {
        if (err) throw err;
        if (result.length != 1) {
            console.log("User not found/Multiple users detected")
            //res.json([])
        }
        res.json(result);
    });
})


router.post('/set-user-onboarding-data', (req, res, next) => {
    let db_connect = dbo.getDb();
    collection = db_connect.collection("user-profile")
    collection.find({ name: req.body.name }).toArray().then((value) => {
        console.log(value.length)
        if (value.length == 0) {
            collection.insertOne(req.body)
        }
    })

    //cursor.toArray(function (err, result) {

    /*
        {
            name,
                age,
                industry,
                seniority,
                country,
                role
        }
        */
})

/*
router.post('/verify-dev-name', (req, res, next) => {
    const { name } = req.body
    switch (name) {
        case DEV_NAME:
            res.json({ message: "Name is valid" })
            break;
        default:
            res.json({ message: "Name is invalid" })
    }
})
*/

module.exports = router;