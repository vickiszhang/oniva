const dotenv = require("dotenv");
const express = require("express");
const activitiesRouter = require("./routes/activityRoutes.js");
const mongoose = require("mongoose");
const cors = require("cors");


dotenv.config();

const app = express();
app.use(express.json());
app.use("/activities", activitiesRouter);
app.use(cors());

const MONGODB_URI = 'mongodb://0.0.0.0:27017/arcteryx';
mongoose.connect(`${MONGODB_URI}`).catch((e) => console.log(e));

app.listen(3000, async () => {
  console.log("Connected to MongoDB and running at http://localhost:3000");
});
