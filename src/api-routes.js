Course = require('../src/models/courseModel');

const router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        title: 'Adaptive Course',
        status: 'API Its Working',
        message: 'congratulations you have get the response from the api!',
    });
});
// Import contact controller
const contactController = require('./controller/contactController');
const courseController = require('./controller/courseController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// Course API
router.route('/course')
    .get(courseController.get)
    .post(courseController.new);
//
// Export API routes
module.exports = router;