const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    group: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true
    }  
});

module.exports = Blog = mongoose.model('blog', BlogSchema);