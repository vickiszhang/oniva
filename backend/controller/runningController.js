const MongoClient = require("mongodb").MongoClient;
const Running = require( "../models/running.js");


const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


const addRunning = async (req, res, next) => {
    let running;
    const { name, difficulty, location } = req.body;
  
    try {
      running = new Running({ name, difficulty, location });
      running = await running.save();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: "Malformed request" });
    }
  
    if (!running) {
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    return res
      .status(200)
      .json({ message: "Successfully added activity to runnings" });
};

  
const getRunnings = async (req, res, next) => {
    let runnings;
    try {
        runnings = await Running.find();
    } catch (e) {
      console.log(e);
    }
  
    if (!runnings) {
        console.log(runnings);
      return res.status(500).json({ message: "Unexpected error" });
    }
  
    return res.status(200).json({ runnings });
};

const deleteRunning = async (req, res, next) => {
    let running;
    const name = req.params.name;
  
    try {
      running = await Running.findByIdAndDelete(name);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    if (!running) {
      return res.status(404).json({ message: "Running not found" });
    }
  
    return res.status(200).json({ message: "Running successfully deleted" });
};

  module.exports = {
    addRunning,
    getRunnings,
    deleteRunning,

  };
  