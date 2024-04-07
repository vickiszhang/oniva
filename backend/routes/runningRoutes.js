const express = require("express");
const router = express.Router();
const {
  addRunning,
  getRunnings,
  deleteRunning,
} = require("../controller/runningController.js");
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
    addRunning
  );

router.get("/get", getRunnings);

router.delete(
    "/delete/:name",
    [param("name").not().isEmpty(), validateResults],
    deleteRunning
);


module.exports = router;