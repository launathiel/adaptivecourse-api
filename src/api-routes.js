const router = require('express').Router();
const verify = require('./validator/verifyToken');
// Set default API response
router.get('/', (req, res) => {
  res.json({
    title: 'Adaptive Course',
    status: 'API Its Working',
    message: 'congratulations you have get the response from the api!',
  });
});
// User Register and Login API
const userController = require('./controller/userController');

router.route('/testing')
  .get(verify, userController.testGetPost);
router.route('/auth/register')
  .post(userController.postUserRegister);
router.route('/auth/register/:user_id')
  .delete(userController.deleteUserById);
router.route('/auth/login')
  .post(userController.postUserLogin);
// Import contact controller
const courseController = require('./controller/courseController');
// Course API
router.route('/course')
  .get(courseController.getAllCourse)
  .post(courseController.createNewCourse);
router.route('/course/:course_id')
  .get(courseController.viewById)
  .delete(courseController.deleteById)
  .patch(courseController.UpdateById);
// Export API routes
module.exports = router;
