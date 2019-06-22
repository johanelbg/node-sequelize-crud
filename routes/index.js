const express = require("express");
const router = express.Router();

const companiesController = require("../controllers").companies;

// companies routers
router.get("/companies", companiesController.getAll);
router.get("/companies/:company_id", companiesController.getById);
router.post("/companies", companiesController.add);
router.delete("/companies", companiesController.delete);
router.put("/companies/:company_id", companiesController.update);

module.exports = router;
