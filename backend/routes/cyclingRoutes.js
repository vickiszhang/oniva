const express = require("express");
const router = express.Router();
const {
  addCycling,
  getCyclings,
  deleteCycling,
} = require("../controller/cyclingController.js");
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
    addCycling
  );

router.get("/get", getCyclings);

router.delete(
    "/delete/:name",
    [param("name").not().isEmpty(), validateResults],
    deleteCycling
);


module.exports = router;