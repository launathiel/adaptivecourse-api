/* eslint-disable no-undef */
Course = require('../models/courseModel');

exports.getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200);
    res.json({
      status: 'sucess',
      message: 'Course retrieved successfully',
      data: courses,
    });
  } catch (err) {
    res.status(404);
    res.json({
      status: 'error',
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
    harga: req.body.harga,
    isDiskon: req.body.isDiskon,
    hargaDiskon: req.body.hargaDiskon,
  });

  try {
    const saveCourse = await course.save();
    res.status(200);
    res.json({
      message: 'new course created!',
      data: saveCourse,
    });
  } catch (err) {
    res.status(404);
    res.json({
      status: 'error',
      message: err,
    });
  }
};

exports.viewById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.course_id);
    res.status(200);
    res.json({
      message: 'course details loading..',
      data: course,
    });
  } catch (err) {
    res.status(404);
    res.json({
      status: 'error',
      message: err,
    });
  }
};

exports.UpdateById = async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.course_id });

    if (req.body.judul) {
      course.judul = req.body.judul;
    }

    if (req.body.pemateri) {
      course.pemateri = req.body.pemateri;
    }

    if (req.body.deskripsi) {
      course.deskripsi = req.body.deskripsi;
    }

    if (req.body.bintang) {
      course.bintang = req.body.bintang;
    }

    if (req.body.jumlahPenilai) {
      course.jumlahPenilai = req.body.jumlahPenilai;
    }

    if (req.body.imageMateri) {
      course.imageMateri = req.body.imageMateri;
    }

    if (req.body.imageNetwork) {
      course.imageNetwork = req.body.imageNetwork;
    }

    if (req.body.harga) {
      course.harga = req.body.harga;
    }

    if (req.body.isDiskon) {
      course.isDiskon = req.body.isDiskon;
    }

    if (req.body.hargaDiskon) {
      course.hargaDiskon = req.body.hargaDiskon;
    }

    await course.save();
    res.status(200);
    res.json({
      status: 'success',
      message: 'successfully update course!',
      data: course,
    });
  } catch (err) {
    res.status(404);
    res.json({
      status: 'error',
      message: err,
    });
  }
};

exports.deleteById = async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.params.course_id });
    res.status(200);
    res.json({
      status: 'sucess',
      message: `Course with id = ${req.params.course_id} has been deleted`,
    });
  } catch (err) {
    res.status(404);
    res.json({
      status: 'error',
      message: err,
    });
  }
};
