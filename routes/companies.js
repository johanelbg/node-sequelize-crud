const express = require("express");
const router = express.Router();
const db = require("../config/config.json");
const Companies = require("../models/companies");

router.get("/", (req, res) =>
  Companies.findAll()
    .then(companies => {
      res.send(companies);
    })
    .catch(e => console.log(e))
);

router.post("/", (req, res) => {
  const { name } = req.body;
  Companies.create({
    name
  })
    .then(() => res.sendStatus(201))
    .catch(e => console.log(e));
});

module.exports = router;
