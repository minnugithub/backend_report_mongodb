const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
  taskname: {
    type: String,
    required: true,
  },
  taskid: {
    type: String,
    required: true,
  },
  taskdescription: {
    type: String,
    required: true,
  },
  files: {
    type: String,
    required: true,
  },
  leader: {
    type: String,
    required: true,
  },
  associate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  approval: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
