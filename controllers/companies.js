const Companies = require("../models/companies");

module.exports = {
  getAll(req, res) {
    return Companies.findAll()
      .then(companies => {
        res.send(companies);
      })
      .catch(e => console.log(e));
  },

  getById(req, res) {
    return Companies.findByPk(req.params.company_id)
      .then(company => res.send(company))
      .catch(e => console.log(e));
  },

  add(req, res) {
    const { name } = req.body;
    return Companies.create({
      name
    })
      .then(() => res.sendStatus(201))
      .catch(e => console.log(e));
  },

  delete(req, res) {
    return Companies.destroy({
      where: { id: req.params.company_id }
    })
      .then(company_id => res.send(`company with id: ${company_id} removed`))
      .catch(e => console.log(e));
  },

  update(res, req) {
    const { name } = req.body;
    return Companies.update({ name }, { where: { id: req.params.company_id } })
      .then(company => res.send(company))
      .catch(e => console.log(e));
  }
};
