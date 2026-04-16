const path  = require("path");
const Shark = require("../models/sharks");

exports.index = function(req, res) {
  res.sendFile(path.resolve("views/sharks.html"));
};

exports.create = function(req, res) {
  var newShark = new Shark(req.body);
  newShark.save(function(err) {
    if (err) return res.status(400).send("Unable to save shark to database");
    res.redirect("/sharks/getshark");
  });
};

exports.list = function(req, res) {
  Shark.find({}).exec(function(err, sharks) {
    if (err) return res.status(500).send(err);
    res.render("getshark", { sharks: sharks });
  });
};
