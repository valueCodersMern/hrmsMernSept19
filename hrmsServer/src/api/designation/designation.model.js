(function () {
    'use strict';
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var designationSchema = new Schema({
        id: { type: String },
        type: { type: String }
    });

    const Designation = mongoose.model('Designation', designationSchema)
    module.exports = Designation
}());