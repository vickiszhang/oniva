const express = require("express");
const router = express.Router();
const {
  addActivity,
  getActivities,
  deleteActivity,
} = require("../controller/activityController.js");


router.post("/add", async (req, res) => {

  const name = req.body.name;
  const difficulty = req.body.difficulty;
  const location = req.body.location;
  const type = req.body.type;

  const activity = await addActivity(name, difficulty, location, type);
  res.send(activity);
});

router.get("/get", async (req, res) => {

  const activities = await getActivities();
  res.send(activities);
});

router.delete("/delete/:name", async (req, res) => {
    const name = req.params.name;
    const result = await deleteActivity(name);
    res.send(result);
  });

module.exports = router;