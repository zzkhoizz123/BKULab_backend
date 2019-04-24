const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        require: true,
    },
    academic_year: {
        type: String,
        require: true
    }  
});

module.exports = Member = mongoose.model('member', MemberSchema);