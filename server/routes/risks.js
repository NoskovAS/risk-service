const express = require("express");
const router = express.Router();
const Risk = require("../models/risk");

router.post("/addRisk", (req, res, next) => {
    "use strict";
    let newRisk = new Risk({
        uid: req.body.uid,
        riskname: req.body.riskname,
        priority: req.body.priority,
        hoursinfluence: req.body.hoursinfluence,
        costinfluence: req.body.costinfluence,
        commonChance: req.body.commonChance,
        date: req.body.date,
        suggestions: req.body.suggestions,
        index: req.body.index
    });

    // Save the risk
    newRisk.save(function(err) {
        if (err) throw err;

        res.json({
            success: true,
            msg: "Risk registered"
        });
    });
});

// Get the risk
router.post("/getRisk", (req, res, next) => {
    "use strict";
    const uid = req.body.uid;
    Risk.find({
            uid: uid
        },
        function(err, risk) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(risk);
            }
        }
    );
});

// Delete risk
router.post("/deleteRisk", (req, res, next) => {
    "use strict";
    const i = req.body.index; // index
    const uid = req.body.uid;
    Risk.find({
            index: i,
            uid: uid
        },
        function(err, risk) {
            if (err) throw err;

            // delete him
            Risk.deleteOne({
                    index: i,
                    uid: uid
                },
                function(err, removed) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        return res.json({
                            success: true,
                            msg: "Successfully deleted"
                        });
                    }
                }
            );
        }
    );
});

// Clear table
router.post("/clearTable", (req, res, next) => {
    "use strict";
    const uid = req.body.uid;
    Risk.remove({
            uid: uid
        },
        function(err) {
            if (err) {
                console.log(err);
            } else {
                res.end("success table clear");
            }
        }
    );
});

module.exports = router;