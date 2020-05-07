var mongoose = require('mongoose');

// Setup schema
var contactSchema = mongoose.Schema({
    courseName: {
        type: String,
    },
    assignMentName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        default: Date.now
    }
})

//Export Assignment model
var Assign = module.exports = mongoose.model('assign', contactSchema);

module.exports.get = function (callback, limit) {
    Assign.find(callback).limit(limit);
}