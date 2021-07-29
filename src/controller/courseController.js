Course = require('../models/courseModel');

exports.new = async (req, res) => {
    const course = new Course();
    course.judul = req.body.judul,
    course.pemateri = req.body.pemateri,
    course.deskripsi = req.body.deskripsi,
    course.bintang = req.body.bintang,
    course.jumlahPenilai = req.body.jumlahPenilai,
    course.imageMateri = req.body.imageMateri,
    course.harga = req.body.harga;

    try{
        const saveCourse = await course.save();
        res.json({
            message: 'new course created!',
            data: saveCourse
        });
    }catch (err) {
        res.json({
            message: err
        })
    }
}

exports.get = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json({
            status: "sucess",
            message: "Course retrieved successfully",
            data: courses
        })
    }catch (err) {  
        res.json({
            message: err
        })
    }
}