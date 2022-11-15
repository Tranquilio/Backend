const express = require("express");
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const employeeRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../conn");

//Helper functions
function getAvg(object) {
    //Ignore first two elements of employeeInfo and calc average of scores per individual
    avg = 0
    for (i = 2; i < object.employeeInfo.length; i++) {
        avg = avg + object.employeeInfo[i]
    }
    avg = avg / (object.employeeInfo.length - 1)
    return avg
}

// Copy over data to a new collection (For testing)
// employeeRoutes.route("/api/employees/create").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     cursor = db_connect.collection("typeform-response").find({});
//     cursor.toArray(function (err, result) {
//         if (err) throw err;
//         for (element of result) {
//             element["averageScore"] = getAvg(element);
//             db_connect.collection("copy").insertOne(element);
//         }
//         res.json(result);
//     });
// });

employeeRoutes.route("/api/employees/profiles").post(function (req, res) {
    let db_connect = dbo.getDb();
    const {data} = req.body
    data.forEach(element => {
        value = db_connect.collection("profiles").find(element)
        value.count().then(
            (result) => {
                if(result == 0) {
                    db_connect.collection("profiles").insertOne(element)
                    console.log("New document added");
                }
                else {
                    console.log("Document already exists")
                }
            }   
        )
        
    })
});

// Update data to have the averageScore property
employeeRoutes.route("/api/employees/update").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        for (element of result) {
            myquery = { _id: element._id };
            element["averageScore"] = getAvg(element);
            db_connect.collection("typeform-response").replaceOne(myquery, element, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
            });
        }
        res.json(result);
    });
});

// This section will help you get a list of all the employee data. (To have average score -> use update to update the database)
employeeRoutes.route("/api/employees/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    console.log(db_connect)
    cursor = db_connect.collection("typeform-response").find({});
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

employeeRoutes.route("/api/employees/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").find({ companyName: req.params.id });
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// Used for overall wellbeing score
employeeRoutes.route("/api/employees/scores/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    console.log(db_connect)
    cursor = db_connect.collection("typeform-response").aggregate([
        { $group: { _id: null, average: { $avg: "$averageScore" } } },
    ]);
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json({ "Average Score": result[0].average * 100 / 6 });
    });
});

employeeRoutes.route("/api/employees/scores/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").aggregate([
        { $match: { companyName: req.params.id } },
        { $group: { _id: null, average: { $avg: "$averageScore" } } },
    ]);
    cursor.toArray(function (err, result) {
        if (err) throw err;
        res.json({ "Average Score": result[0].average * 100 / 6 });
    });
});

//Json -> {deptname : score}
employeeRoutes.route("/api/employees/dept/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").aggregate([
        { $group: { _id: "$dept", average: { $avg: "$averageScore" } } },
    ]);
    cursor.toArray(function (err, result) {
        if (err) throw err;
        out = {}
        for (element of result) {
            out[element._id] = element.average
        }
        res.json(out);
    });
});

employeeRoutes.route("/api/employees/dept/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").aggregate([
        { $match: { companyName: req.params.id } },
        { $group: { _id: "$dept", average: { $avg: "$averageScore" } } },
    ]);
    cursor.toArray(function (err, result) {
        if (err) throw err;
        out = {}
        for (element of result) {
            out[element._id] = element.average
        }
        res.json(out);
    });
});

//Json -> {seniority : score}
employeeRoutes.route("/api/employees/seniority/all").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").aggregate([
        { $group: { _id: "$seniority", average: { $avg: "$averageScore" } } },
    ]);
    cursor.toArray(function (err, result) {
        if (err) throw err;
        out = {}
        for (element of result) {
            out[element._id] = element.average
        }
        res.json(out);
    });
});

employeeRoutes.route("/api/employees/seniority/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("typeform-response").aggregate([
        { $match: { companyName: req.params.id } },
        { $group: { _id: "$seniority", average: { $avg: "$averageScore" } } },
    ]);
    cursor.toArray(function (err, result) {
        if (err) throw err;
        out = {}
        for (element of result) {
            out[element._id] = element.average
        }
        res.json(out);
    });
});

//Fetches employee names and emails from mongoDB and puts it in an array
employeeRoutes.route("/api/employees/profiles/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    cursor = db_connect.collection("profiles").aggregate([
        { $match: { company: req.params.id } }
    ]);
    cursor.toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
     
})

module.exports = employeeRoutes;
