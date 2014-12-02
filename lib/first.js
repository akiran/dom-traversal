var eq = require('./eq');

var first = function (elements) {
  return eq(elements, 0);
};

module.exports = first;