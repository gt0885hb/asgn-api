// Initialize the express router
let router = require("express").Router();
let controller = require('./controller');

//Contact routes
router.route('/assigns')
    .post(controller.new)
    .get(controller.index);

router.route('/assigns/:assign.id')
    .get(controller.list)
    .put(controller.update)
    .delete(controller.delete);

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to asgn-api!'
    });
});

module.exports = router;