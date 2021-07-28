// contactModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Setup schema
const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        gender: String,
        phone: String,
        create_date: {
            type: Date,
            default: Date.now
        }
    }, 
    {
        collection: 'contacts'
    }
);

// Export Contact model
const Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}