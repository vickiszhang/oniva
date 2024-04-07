const MongoClient = require("mongodb").MongoClient;
const Park = require( "../models/park.js");


const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


const addPark = async (req, res, next) => {
    let park;
    const { name, difficulty, location } = req.body;
  
    try {
      park = new Park({ name, difficulty, location });
      park = await park.save();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: "Malformed request" });
    }
  
    if (!park) {
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    return res
      .status(200)
      .json({ message: "Successfully added activity to parks" });
};

  
const getParks = async (req, res, next) => {
    let parks;
    try {
        parks = await Park.find();
    } catch (e) {
      console.log(e);
    }
  
    if (!parks) {
        console.log(parks);
      return res.status(500).json({ message: "Unexpected error" });
    }
  
    return res.status(200).json({ parks });
};

const deletePark = async (req, res, next) => {
    let park;
    const name = req.params.name;
  
    try {
      park = await Park.findByIdAndDelete(name);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    if (!gift) {
      return res.status(404).json({ message: "Park not found" });
    }
  
    return res.status(200).json({ message: "Park successfully deleted" });
};

  module.exports = {
    addPark,
    getParks,
    deletePark,

  };
  