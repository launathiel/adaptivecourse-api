const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        judul: {
            type: String,
            required: true
        },
        pemateri: {
            type: String,
            required: true
        },
        deskripsi: {
            type: String,
            required: true
        },
        bintang: String,
        jumlahPenilai: String,
        imageMateri: String,
        imageNetwork: String,
        harga: {
            type: String,
            required: true
        },
        create_date: {
            type: Date,
            default: Date.now
        },
    },
    {
        collection: 'course'
    }
);

module.exports = mongoose.model('course', courseSchema);