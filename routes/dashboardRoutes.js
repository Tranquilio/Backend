
require('dotenv').config()
const dbo = require("../conn");

const express = require('express');
const router = express.Router();

const { DEV_NAME, PRIVATE_KEY } = process.env

/**
 const dashboardData = [
  {
    type: 'overview',
    name: 'Overall wellbeing score',
    score: '65',
    change: '1',
    changeType: 'increase',
    stressors: [
      'Work Demand',
      'Organizational Leadership',
      'Coworker Relationship',
    ],
    insight:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    recommendation:
      'Morel ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    type: 'subconstruct_breakdown',
    name: 'Subconstruct breakdown',
    stressors: [
      { name: 'Work Demand', value: '32', change: 'Higher' },
      { name: 'Work Flexibility', value: '41', change: 'Lower' },
      { name: 'Coworker Relationship', value: '54', change: 'Lower' },
      { name: 'Organizational Leadership', value: '54', change: 'Lower' },
      { name: 'Compensation', value: '76', change: 'Higher' },
    ],
  },
  {
    type: 'trends',
    name: 'Trends',
    industry: {
      score: '60.5',
      change: 'lower',
      name: 'Information Technology',
    },
    age: { score: '88.2', change: 'higher', name: '18 to 22' },
  },
  {
    type: 'recommendations',
    name: 'Recommendations',
    work_demand: { name: 'Work Demand', scoring: 'Good' },
    coworker_relationship: { name: 'Coworker Relationship', scoring: 'Poor' },
    compensation: { name: 'Compensation', scoring: 'Satisfactory' },
    organizational_leadership: {
      name: 'Organizational Leadership',
      scoring: 'Good',
    },
    work_flexibility: { name: 'Work Flexibility', scoring: 'Satisfactory' },
  },
]
* 
 */
router.get("/get-user-dashboard/:uid", (req, res, next) => {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("dashboard-analytics").find({ uid: req.params.uid });
    cursor.toArray(function (err, result) {
      if (err) throw err;
      if (result.length === 0) {
        console.log("User not found");
        res.status(404).json({ message: "User not found" });
      } else if (result.length > 1) {
        console.log("Multiple users detected");
        res.status(400).json({ message: "Multiple users detected" });
      } else {
        console.log(result[0]);
        res.json(result[0]);
      }
    });
  });
  

/**
 * Takes in contruct name and user id
 * Returns array of recommendation
 * [
 *  introduction: "One liner intro of the stressor insight",
 *  recommendation_1: {title: "Eat healthy", description: "Do it!"}
 *  recommendation_2: {title: "Sleep early", description: "Sleep at 10pm"}
 *  recommendation_3: {title: "Be happy", description: "Do something fun"}
 *  conclusion: "One liner conclusion of the stressor insight"
 * ]
 */
router.get("/get-construct-recommendation/:construct/:id", (req, res, next) => {
    let db_connect = dbo.getDb();
    // cursor = db_connect.collection("user-profile").find({ name: req.params.id });
    // cursor.toArray(function (err, result) {
    //     if (err) throw err;
    //     if (result.length != 1) {
    //         console.log("User not found/Multiple users detected")
    //         //res.json([])
    //     }
    //     res.json(result);
    // });
})

module.exports = router;