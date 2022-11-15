const express = require("express");
const { getDb } = require("../conn");
const baseForm = require("../form-body")
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const typeformRoutes = express.Router();

typeformRoutes.route("/api/typeform/generate").post(async function (req, res) {
  const { companyname, text, title } = req.body

  payload = baseForm
  payload.welcome_screens[0].title = title
  payload.welcome_screens[0].properties.description = text
  payload.title = companyname + " survey"

  //Make new survey fitting input data
  const result = await fetch("https://api.typeform.com/forms", {
    method: 'POST',
    headers: {
      Authorization: "Bearer tfp_7dMvjfhHtcYMFCSMytV8Fsop1UT6mHBVtVW7rdgFfPwN_3w5qgeFDNcwU8J",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  //Get the survey's link
  const result2 = await fetch("https://api.typeform.com/forms", {
    method: 'GET',
    headers: {
      Authorization: "Bearer tfp_7dMvjfhHtcYMFCSMytV8Fsop1UT6mHBVtVW7rdgFfPwN_3w5qgeFDNcwU8J",
      'Content-Type': 'application/json'
    }
  })
  body = await result2.json()
  formId = body.items[0].id
  console.log(body.items[0])
  res.json("https://3oms1jii0jw.typeform.com/to/" + formId)

});

// //Get summary of market research survey
// typeformRoutes.route("/api/typeform/summary").get(async function (req, res) {

//   const result = await fetch("https://api.typeform.com/insights/PqwjqxXz/summary", {
//     method: 'GET',
//     headers: {
//       Authorization: "Bearer tfp_7dMvjfhHtcYMFCSMytV8Fsop1UT6mHBVtVW7rdgFfPwN_3w5qgeFDNcwU8J",
//       'Content-Type': 'application/json'
//     },
//   })
//   result.json().then((out) => res.json(out))
// });

typeformRoutes.route("/api/typeform/getres").get(async function (req, res) {
  const result = await fetch("https://api.typeform.com/forms/PqwjqxXz/responses", {
    method: 'GET',
    headers: {
      Authorization: "Bearer tfp_7dMvjfhHtcYMFCSMytV8Fsop1UT6mHBVtVW7rdgFfPwN_3w5qgeFDNcwU8J",
      'Content-Type': 'application/json'
    },
  })

  result.json().then((out) => res.json(out))
});

typeformRoutes.route("/api/typeform/checkExisting/:id").get(async function (req, res) {
  const {companyname, link} = req.body
  let db = getDb()

  cursor = db.collection("surveys").find({company: req.params.id})
  cursor.toArray(function (err, result) {
    if (err) throw err;
    res.json({result});
  });
});

typeformRoutes.route("/api/typeform/save").post(async function (req, res) {
  const {companyName, link} = req.body
  let db = getDb()

  db.collection("surveys").insertOne({company: companyName, "survey_link": link})
  cursor = db.collection("surveys").find({})
  cursor.toArray(function (err, result) {
    if (err) throw err;
    res.json({result});
  });
});


module.exports = typeformRoutes;