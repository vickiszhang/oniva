const express = require("express");
const router = express.Router();
const {
  addHiking,
  getHikings,
  deleteHiking,
} = require("../controller/hikingController.js");
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
    addHiking
  );

router.get("/get", getHikings);

router.delete(
    "/delete/:name",
    [param("name").not().isEmpty(), validateResults],
    deleteHiking
);


module.exports = router;