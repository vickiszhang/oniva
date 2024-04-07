const MongoClient = require("mongodb").MongoClient;
const Climbing = require( "../models/climbing.js");


const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


const addClimbing = async (req, res, next) => {
    let climbing;
    const { name, difficulty, location } = req.body;
  
    try {
      climbing = new Climbing({ name, difficulty, location });
      climbing = await climbing.save();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: "Malformed request" });
    }
  
    if (!climbing) {
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    return res
      .status(200)
      .json({ message: "Successfully added activity to climbings" });
};

  
const getClimbings = async (req, res, next) => {
    let climbings;
    try {
        climbings = await Climbing.find();
    } catch (e) {
      console.log(e);
    }
  
    if (!climbings) {
        console.log(climbings);
      return res.status(500).json({ message: "Unexpected error" });
    }
  
    return res.status(200).json({ climbings });
};

const deleteClimbing = async (req, res, next) => {
    let climbing;
    const name = req.params.name;
  
    try {
      climbing = await Climbing.findByIdAndDelete(name);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    if (!climbing) {
      return res.status(404).json({ message: "Climbing not found" });
    }
  
    return res.status(200).json({ message: "Climbing successfully deleted" });
};

  module.exports = {
    addClimbing,
    getClimbings,
    deleteClimbing,

  };
  