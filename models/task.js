const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true,"Name of the task is required"] 
    },
    description: String,
    progress:{ 
        type: String, 
        enum: ["Not Started","In Progress","Completed"] 
    },
    project: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'project' 
    }
});

module.exports = mongoose.model("task",taskSchema);