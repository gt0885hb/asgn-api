// Import contact model
var Assign = require('./model');

// Retrieving Index Action
exports.index = function (req, res) {
    Assign.get(function (err, assign) {
        if (err) {
            res.json(err);
        }
        res.json({
            status: "success",
            message: "Assignments successfully retrieved!",
            data: assign
        })
    })
}

// Create assignment action
exports.new = function(req, res) {
    var assign = new Assign();
    assign.courseName = req.body.courseName;
    assign.assignMentName = req.body.assignMentName;
    assign.dueDate = req.body.dueDate;

    // Save the contact and check for errors
    assign.save(function(err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "New assignment created!",
            data: assign
        })
    })
}

// Updating assignment action
exports.update = function(req, res) {
    Assign.findById(req.params.assign_id, function(err, assign) {
        if (err) {
            res.send(err);
        }

        assign.courseName = req.body.courseName;
        assign.assignMentName = req.body.assignMentName;
        assign.dueDate = req.body.dueDate;

    // Save the assingment and check for errors
    assign.save(function(err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "Assignment updated!",
            data: assign
            })
        })
    })
}

// Listing assignment action
exports.list = function(req, res) {
    Assign.findById(req.params.assign_id, function(err, assign) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Assignments listed!",
            data: assign
            })
        })
}

// Handle delete action
exports.delete = function (req, res) {
    Assign.remove({
        _id: req.params.assign_id
    }, function(err, assign) {
        if (err) {
            res.json(err);
        }
        res.json({
            status: "Success!",
            message: "Assignment deleted!"
        })
    })
}