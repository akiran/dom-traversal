var eq = function (elements, index) {
  elements = elements.length ? elements: [elements];
  if (index < 0) {
    index = elements.length + index;
  }
  if (index < 0 || index >= elements.length)
    return null;

  return elements[index];
};

module.exports = eq;
