const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const User = require("../models/user");
const Risk = require("../models/risk");
const Admin = require("../models/admin");
const Report = require("../models/report");

// Admin authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.getByName(username, (err, admin) => {
        if (err) throw err;
        if (!admin) {
            return res.json({
                success: false
            });
        }

        Admin.comparePassword(password, admin.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(admin, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true
                });
            } else {
                return res.json({
                    success: false
                });
            }
        });
    });
});

// Get users
router.post("/getUsers", (req, res, next) => {
    "use strict";
    User.find(function(err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    });
});

// Delete user
router.post('/deleteUser', (req, res, next) => {
    "use strict";
    const username = req.body.username;
    User.findOne({
            username: username
        },
        function(err, user) {
            if (err) throw err;

            // delete him
            User.deleteOne({
                    username: username
                },
                function(err, removed) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        return res.json({
                            success: true,
                            msg: "Successfull user deleted"
                        });
                    }
                }
            );
        }
    );
});

router.post('/getReport', (req, res, next) => {
    "use strict";

    let newReport = new Report({
        username: req.body.username,
        message: req.body.report,
    });

    // Save the risk
    newReport.save(function(err) {
        if (err) throw err;

        console.log("Report added!");
        res.json({
            success: true,
            msg: "Report added"
        });
    });
});

router.post('/getReports', (req, res, next) => {
    "use strict";
    Report.find(function(err, user) {
        if (err) {
            res.sendStatus('500').send(err);
        } else {
            res.send(user);
        }
    });
});

router.post('/getInfo', async(req, res, next) => {
    usersCount = await User.find();
    risksCount = await Risk.find();
    res.json({
        'usersCount': usersCount.length,
        'risksCount': risksCount.length
    });
})

module.exports = router;