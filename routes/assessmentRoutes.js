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
const router = express.Router();

const { DEV_NAME, PRIVATE_KEY } = process.env

/**
 * Sends assessment data to our database. 
 * When user profile is not created ("Get my Wellbeing Report" is clicked), 
 * send this format.
 * {
 *  "uid": "1", #Generate random uid.
    "email": null,
    "password": null, #Should password be here?
    "name": null,
    "age": "41-50",
    "industry": "Health and Medicine",
    "seniority": "1-2 years",
    "country": "Singapore",
    "role": "Software Engineer"
    "answers": {
        "1": 4,
        "2": 3,
        ...
        "30": 5
    }
 * }
 *  When logging in, if there is data stored in local storage, it will call this endpoint
 *  again and add in email, name.
 *  Set to user-profile document.
 * Returns the uid.
 */
router.post('/set-user-onboarding-data', (req, res, next) => {
    let db_connect = dbo.getDb();
    collection = db_connect.collection("user-profile")
    collection.find({ name: req.body.name }).toArray().then((value) => {
        console.log(value.length)
        if (value.length == 0) {
            collection.insertOne(req.body)
        }
    })
})

/**
 * Takes in the uid and returns the following:
 * {
 *  score: "64",
 *  top_3_stressors: ["Work demand", "Organiational Leadership", "Coworker Relationship"],
 *  insight: "One-liner insight",
 *  recommendation: "One-liner recommendation"
 * }
 */
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

module.exports = router;