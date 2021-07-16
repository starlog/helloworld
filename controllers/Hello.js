'use strict';

var utils = require('../utils/writer.js');
var Hello = require('../service/HelloService');

module.exports.helloworld = function helloworld (req, res, next) {
  var name = req.swagger.params['name'].value;
  Hello.helloworld(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
