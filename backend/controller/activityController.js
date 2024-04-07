const MongoClient = require("mongodb").MongoClient;
const Activity = require( "../models/activity.js");


const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


const addActivity = async (req, res, next) => {
    let activity;
    const { name, difficulty, location, type } = req.body;
  
    try {
      activity = new Activity({ name, difficulty, location, type });
      activity = await activity.save();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: "Malformed request" });
    }
  
    if (!activity) {
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    return res
      .status(200)
      .json({ message: "Successfully added activity to activities" });
};

  
const getActivities = async (req, res, next) => {
    let activities;
    try {
        activities = await Activity.find();
    } catch (e) {
      console.log(e);
    }
  
    if (!activities) {
        console.log(activities);
      return res.status(500).json({ message: "Unexpected error" });
    }
  
    return res.status(200).json({ activities });
};

const deleteActivity = async (req, res, next) => {
    let activity;
    const name = req.params.name;
  
    try {
      activity = await Activity.findByIdAndDelete(name);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    if (!gift) {
      return res.status(404).json({ message: "Activity not found" });
    }
  
    return res.status(200).json({ message: "Activity successfully deleted" });
};

  module.exports = {
    addActivity,
    getActivities,
    deleteActivity,
  };
  