const mongoose =require("mongoose");

const Schema = mongoose.Schema;
const runningSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("running", runningSchema);
