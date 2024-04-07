const MongoClient = require("mongodb").MongoClient;
const Cycling = require( "../models/cycling.js");


const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


const addCycling = async (req, res, next) => {
    let cycling;
    const { name, difficulty, location } = req.body;
  
    try {
      cycling = new Cycling({ name, difficulty, location });
      cycling = await cycling.save();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: "Malformed request" });
    }
  
    if (!cycling) {
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    return res
      .status(200)
      .json({ message: "Successfully added activity to cyclings" });
};

  
const getCyclings = async (req, res, next) => {
    let cyclings;
    try {
        cyclings = await Cycling.find();
    } catch (e) {
      console.log(e);
    }
  
    if (!cyclings) {
        console.log(cyclings);
      return res.status(500).json({ message: "Unexpected error" });
    }
  
    return res.status(200).json({ cyclings });
};

const deleteCycling = async (req, res, next) => {
    let cycling;
    const name = req.params.name;
  
    try {
      cycling = await Cycling.findByIdAndDelete(name);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    if (!cycling) {
      return res.status(404).json({ message: "Cycling not found" });
    }
  
    return res.status(200).json({ message: "Cycling successfully deleted" });
};

  module.exports = {
    addCycling,
    getCyclings,
    deleteCycling,

  };
  