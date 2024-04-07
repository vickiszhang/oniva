const express = require("express");
const router = express.Router();
const {
  addClimbing,
  getClimbings,
  deleteClimbing,
} = require("../controller/climbingController.js");
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
    addClimbing
  );

router.get("/get", getClimbings);

router.delete(
    "/delete/:name",
    [param("name").not().isEmpty(), validateResults],
    deleteClimbing
);


module.exports = router;