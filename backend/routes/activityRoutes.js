const express = require("express");
const router = express.Router();
const {
  addActivity,
  getActivities,
  deleteActivity,
} = require("../controller/activityController.js");
const { check, param } = require("express-validator");
const { validateResults } = require("../middlewares/Validation.js");
router.post(
    "/add",
    [
      check("name").not().isEmpty(),
      check("difficulty").not().isEmpty(),
      check("location").not().isEmpty(),
      check("type").not().isEmpty(),
      validateResults,
    ],
    addActivity
  );

router.get("/get", getActivities);

router.delete(
    "/delete/:name",
    [param("name").not().isEmpty(), validateResults],
    deleteActivity
);


module.exports = router;