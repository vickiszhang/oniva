const express = require("express");
const climbingRouter = require("./routes/climbingRoutes.js");
const cyclingRouter = require("./routes/cyclingRoutes.js");
const hikingRouter = require("./routes/hikingRoutes.js");
const parkRouter = require("./routes/parkRoutes.js");
const runningRouter = require("./routes/runningRoutes.js");

const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());

app.use(express.json());
// app.use("/activities", activitiesRouter);
app.use("/climbing", climbingRouter);
app.use("/cycling", cyclingRouter);
app.use("/hiking", hikingRouter);
app.use("/park", parkRouter);
app.use("/running", runningRouter);

const MONGODB_URI = "mongodb://0.0.0.0:27017/youCode";
mongoose.connect(`${MONGODB_URI}`).catch((e) => console.log(e));

app.listen(3000, async () => {
    console.log("Connected to MongoDB and running at http://localhost:3000");
});
