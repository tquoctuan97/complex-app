const User = require("../model/User");

exports.login = function (req, res) {
  let user = new User(req.body);
  user.login(function (result) {
    res.send(result);
  });
};

exports.logout = function () {};

exports.register = function (req, res) {
  // console.log(req.body);
  let user = new User(req.body);
  user.register();
  if (user.errors.length) {
    res.send(user.errors);
  } else {
    res.send("Register Successfully");
  }
};

exports.home = function (req, res) {
  res.render("home-guest");
};
