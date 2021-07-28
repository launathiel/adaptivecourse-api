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
            // var d = new Date(Date.now); /* midnight in China on April 13th */
            // Date.now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
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