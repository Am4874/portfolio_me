const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    liveUrl: { type: String, required: true },
});

module.exports = mongoose.model('Project', ProjectSchema);