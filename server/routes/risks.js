const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Risk = require('../models/risk');
const User = require('../models/user');


router.post('/table', (req, res, next) => {
    "use strict";
  let newRisk = new Risk({
    username: req.body.username,
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

    console.log('Risk created!');
    res.json({success: true, msg:'Risk registered'});
  });
});  

// Get the risk
router.post('/getRisk', (req, res, next) => {
  "use strict";
  const username = req.body.username;
  Risk.find({"username": username}, function (err, risk) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(risk);
    }
  });
});

// Delete risk
router.post('/deleteRisk', (req, res, next) => {
  "use strict";
  const i = req.body.index;
  const username = req.body.username;
  Risk.find({ index: i, username: username }, function(err, risk) {
    console.log("I: "+i+", Risk: "+risk);
    if (err) throw err;


    // delete him
    Risk.deleteOne({ index: i, username: username }, function(err,removed) {
      if (err) {
        res.status(500).send(err)
      } else {
        return res.json({success: true, msg: 'Successfully deleted'});
      }
    });
  });
});

// Clear table
router.post('/clearTable', (req, res, next) => {
  "use strict";
  const username = req.body.username;
  Risk.remove({"username": username}, function(err) {
    if (err) {
      console.log(err)
    } else {
      res.end('success table clear');
    }
  });
});

module.exports = router;