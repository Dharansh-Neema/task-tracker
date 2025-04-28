const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true,"Name of the project is required"] 
    },
    description: String,
    progress:    String,
    tasks: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'task' 
    }
});

module.exports = mongoose.model("project",projectSchema);