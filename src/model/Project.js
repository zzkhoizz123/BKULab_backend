const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    route: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },

    icon:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: false
    },

});

module.exports = Project = mongoose.model('project', ProjectSchema);