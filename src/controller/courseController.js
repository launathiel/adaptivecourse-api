Course = require('../models/courseModel');

exports.getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json({
            status: "sucess",
            message: "Course retrieved successfully",
            data: courses,
        });
    }catch (err) {  
        res.json({
            status: "error",
            message: err,
        });
    }
};

exports.createNewCourse = async (req, res) => {
    const course = new Course({
        judul: req.body.judul,
        pemateri: req.body.pemateri,
        deskripsi: req.body.deskripsi,
        bintang: req.body.bintang,
        jumlahPenilai: req.body.jumlahPenilai,
        imageMateri: req.body.imageMateri,
        imageNetwork: req.body.imageNetwork,
        harga: req.body.harga
    });

    try{
        const saveCourse = await course.save();
        res.json({
            message: 'new course created!',
            data: saveCourse,
        });
    }catch (err) {
        res.json({
            status: "error",
            message: err,
        });
    }
};

exports.viewById = async (req, res) => {
    try{
        const course = await Course.findById(req.params.post_id);
        res.json({
            message: 'course details loading..',
            data: course,
        });    
    }catch(err){
        res.json({
            status: "error",
            message: err,
        });
    }
};

exports.deleteById = async (req, res) => {
    try{
        const removedPost = await Course.deleteOne({_id: req.params.post_id});
        res.json({
            status: "sucess",
            message: `Course with id = ${req.params.post_id} has been deleted`
        });
    }catch(err){
        res.json({
            status: "error",
            message: err,
        });
    }
};