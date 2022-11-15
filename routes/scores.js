const express = require("express");
 
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const apiRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../conn");

const categories = {
    "Job Demand": [2,3],
    "Job Satisfaction": [4,5],
    "Job Recognition": [6,7,8],
    "Job Control": [9,10],
    "Social Support": [11,12,13],
    "Organizational Culture": [14,15,16]
}

function getCategory(index) {
    for (category in categories) {
        if(categories[category].includes(index))
            return category
    }
    return "Invalid"
}

function calcInfo(input) {
    const stressors = {
        "Job Demand": 0,
        "Job Satisfaction": 0,
        "Job Recognition": 0,
        "Job Control": 0,
        "Social Support": 0,
        "Organizational Culture": 0
    }
    for (element of input) {
        for(i=0; i<element.employeeInfo.length; i++) {
            var cat = getCategory(i)
            if(cat != "Invalid") {
                stressors[cat] = stressors[cat] + element.employeeInfo[i]
            }
        }
    }
    for (cat in stressors) {
        stressors[cat] = stressors[cat] / categories[cat].length
        stressors[cat] = stressors[cat] / input.length
    }
    return stressors
}


// Get top 3 stressors scores and store into indices array 
// function topScores(scores) {
//     // console.log(scores);

//     var toSort = [];
//     for (var key in scores) {
//         toSort.push([key, scores[key]]);
//     }

//     // console.log(toSort);

//     toSort.sort(function(a, b) {
//         return (a[1] < b[1]) ? 1 : -1;
//     });

//     // console.log(toSort);

//     var topIndex = [];
//     for(let i = 0; i < 3; i++) {
//         var category = toSort[i][0];
//         topIndex.push(category);
//     }
//     return topIndex;
// }


apiRoutes.route("/api/scores").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json(calcInfo(result));
    });
});

apiRoutes.route("/api/scores/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({companyName: req.params.id});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json(calcInfo(result));
    });
});

// apiRoutes.route("/api/topscores").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     cursor = db_connect.collection("answers").find({});
//     cursor.toArray(function (err, result) {
//         if (err) throw err;
//         res.json(topScores(calcInfo(result[result.length -1])));
//     });
// });
 
module.exports = apiRoutes;