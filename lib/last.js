var eq = require('./eq');

var last = function (elements) {
  return eq(elements, -1);
};

module.exports = last;