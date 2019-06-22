const express = require("express");
const router = express.Router();
const db = require("../config/config.json");
const Companies = require("../models/companies");
const Users = require("../models/users");
const companies_users = require("../models/companies_users");

router.get("/", (req, res) =>
  Companies.findAll()
    .then(companies => {
      res.send(companies);
    })
    .catch(e => console.log(e))
);

router.get("/:company_id", (req, res) => {
  Companies.findByPk(req.params.company_id)
    .then(company => res.send(company))
    .catch(e => console.log(e));
});

router.post("/", (req, res) => {
  const { name } = req.body;
  Companies.create({
    name
  })
    .then(() => res.sendStatus(201))
    .catch(e => console.log(e));
});

router.delete("/:company_id", (req, res) => {
  Companies.destroy({
    where: { id: req.params.company_id }
  })
    .then(company_id => res.send(`company with id: ${company_id} removed`))
    .catch(e => console.log(e));
});

router.put("/:company_id", (req, res) => {
  const { name } = req.body;

  Companies.update({ name }, { where: { id: req.params.company_id } })
    .then(company => res.send(company))
    .catch(e => console.log(e));
});

module.exports = router;
