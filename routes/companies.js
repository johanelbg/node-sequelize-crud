const express = require("express");
const router = express.Router();
const db = require("../config/config.json");
const Companies = require("../models/companies");

router.get("/", (req, res) =>
  Companies.findAll()
    .then(companies => {
      console.log(companies);
      res.sendStatus(200);
    })
    .catch(e => console.log(e))
);

module.exports = router;
