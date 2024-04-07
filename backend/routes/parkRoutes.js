const express = require("express");
const router = express.Router();
const {
  addPark,
  getParks,
  deletePark,
} = require("../controller/parkController.js");
const { check, param } = require("express-validator");
const { validateResults } = require("../middlewares/Validation.js");


router.post(
    "/add",
    [
      check("name").not().isEmpty(),
      check("difficulty").not().isEmpty(),
      check("location").not().isEmpty(),
      validateResults,
    ],
    addPark
  );

router.get("/get", getParks);

router.delete(
    "/delete/:name",
    [param("name").not().isEmpty(), validateResults],
    deletePark
);


module.exports = router;