var mongoose = require("mongoose");
require("../db/mongoose");
var Designation = require("../../api/designation/designation.model");

async function func(req, res, next) {
    const number = await Designation.countDocuments();
    if (number < 1) {
        var designations = [
            new Designation({
                type: "Admin"
            }),
            new Designation({
                type: "Manager"
            }),
            new Designation({
                type: "Employee/Team Lead"
            })
        ];
        for (var i = 0; i < designations.length; i++) {
            designations[i].save();
        }
    }
}
func();
module.exports = func;
