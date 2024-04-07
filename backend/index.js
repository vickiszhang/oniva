const dotenv = require("dotenv");
const express = require("express");
const climbingRouter = require('/routes/climbingRoutes.js')
const cyclingRouter = require('/routes/cyclingRoutes.js')
const hikingRouter = require('/routes/hikingRouter.js')
const parkRouter = require('/routes/parkRoutes.js')
const runningRouter = require('./routes/runningRoutes.js');

const mongoose = require("mongoose");
const cors = require("cors");
const hiking = require("./models/hiking.js");


dotenv.config();

const app = express();
app.use(express.json());
// app.use("/activities", activitiesRouter);
app.use("/climbing", climbingRouter);
app.use("/cycling", cyclingRouter);
app.use("/hiking", hikingRouter);
app.use("/park", parkRouter);
app.use("/running", runningRouter);
app.use(cors());

const MONGODB_URI = 'mongodb://0.0.0.0:27017/arcteryx';
mongoose.connect(`${MONGODB_URI}`).catch((e) => console.log(e));

app.listen(3000, async () => {
  console.log("Connected to MongoDB and running at http://localhost:3000");
});
