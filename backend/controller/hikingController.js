const MongoClient = require("mongodb").MongoClient;
const Hiking = require( "../models/hiking.js");


const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);


const addHiking = async (req, res, next) => {
    let hiking;
    const { name, difficulty, location } = req.body;
  
    try {
      hiking = new Hiking({ name, difficulty, location });
      hiking = await hiking.save();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: "Malformed request" });
    }
  
    if (!hiking) {
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    return res
      .status(200)
      .json({ message: "Successfully added activity to hikings" });
};

  
const getHikings = async (req, res, next) => {
    let hikings;
    try {
        hikings = await Hiking.find();
    } catch (e) {
      console.log(e);
    }
  
    if (!hikings) {
        console.log(hikings);
      return res.status(500).json({ message: "Unexpected error" });
    }
  
    return res.status(200).json({ hikings });
};

const deleteHiking = async (req, res, next) => {
    let hiking;
    const name = req.params.name;
  
    try {
      hiking = await Hiking.findByIdAndDelete(name);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Unexpected error occured" });
    }
  
    if (!hiking) {
      return res.status(404).json({ message: "Hiking not found" });
    }
  
    return res.status(200).json({ message: "Hiking successfully deleted" });
};

  module.exports = {
    addHiking,
    getHikings,
    deleteHiking,

  };
  