const MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

const COLLECTION = "activities"
const DATABASE = "arcteryx"


const addActivity = async (name, difficulty, location, type) => {
    const insert = async (name, difficulty, location, type) => {
      try {
        await client.connect();
        const database = client.db(DATABASE);
        const activities = database.collection(COLLECTION);
  
        const doc = { name: name, difficulty: difficulty, location: location, type: type};
        const result = await activities.insertOne(doc);
        return result;
      } finally {
        await client.close();
      }
    };
    const result = await insert(name, difficulty, location, type);
    return result;
  };


  
const getActivities = async () => {
    const getAll = async () => {
        try {
          await client.connect();
          const database = client.db(DATABASE);
          const activities = database.collection(COLLECTION);
    
          const query = {};
          const options = { projection: { name: 1, difficulty: 1, location: 1 , type: 1} };
          const cursor = activities.find(query, options);
          const result = [];
          await cursor.forEach((entry) => {
            result.push(entry);
          });
          return result;
        } finally {
          await client.close();
        }
      };
      const result = await getAll();
      return result;
  };

const deleteActivity = async (name) => {
    const deleteValue = async (name) => {
      try {
        await client.connect();
        const database = client.db(DATABASE);
        const activities = database.collection(COLLECTION);
  
        const query = { name: name};
  
        const result = await activities.deleteOne(query);
        return result;
      } finally {
        await client.close();
      }
    };
    const result = await deleteValue(name);
    return result;
  };

  module.exports = {
    addActivity,
    getActivities,
    deleteActivity,

  };
  