const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true,"Name of the task is required"] 
    },
    description: String,
    progress:{ 
        type: String,
    },
    project: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'project' 
    },
    created_at:{
        type : Date,
        default : Date.now()
    }
});

module.exports = mongoose.model("task",taskSchema);