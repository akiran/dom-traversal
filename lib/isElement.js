var isElement = function (element) {
  return element && element.nodeType === 1;
};

module.exports = isElement;