var should = require('should');
var async = require('async');

var first = require('../lib/first');
var last = require('../lib/last');
var eq = require('../lib/eq');
var isElement = require('../lib/isElement');

describe('dom traversal method', function () {
  var testNode;
  beforeEach(function () {
    this.testNode = document.createElement('div');
    document.body.appendChild(this.testNode);
  });

  afterEach(function () {
    document.body.removeChild(this.testNode);
  });

  describe('first', function () {
    it('should return first dom element when list of elements is passed', function () {
      this.testNode.innerHTML = '<p>first</p><p>second</p>';
      var firstElement = first(this.testNode.childNodes);
      firstElement.innerHTML.should.equal('first');
    });

    it('should return dom element when only one dom element is passed', function () {
      this.testNode.innerHTML = 'some text';
      var firstElement = first(this.testNode);
      firstElement.innerHTML.should.equal('some text');
    });
  });

  describe('last', function () {
    it('should return last dom element when list of elements is passed', function () {
      this.testNode.innerHTML = '<p>first</p><p>second</p><p>third</p>';
      var lastElement = last(this.testNode.childNodes);
      lastElement.innerHTML.should.equal('third');
    });

    it('should return dom element when only one dom element is passed', function () {
      this.testNode.innerHTML = 'some text';
      var lastElement = last(this.testNode);
      lastElement.innerHTML.should.equal('some text');
    });
  });

  describe('eq', function () {
    it('should return dom element when only one dom element is passed', function () {
      this.testNode.innerHTML = 'some text';
      var eqElement = eq(this.testNode, 0);
      eqElement.innerHTML.should.equal('some text');
    });

    async.each([
      {index: 0, result: 'first', name: 'should return first element'},
      {index: 1, result: 'second', name: 'should return second element'},
      {index: 3, result: 'fourth', name: 'should return last element'},
      {index: -1, result: 'fourth', name: 'should return last element'},
      {index: -2, result: 'third', name: 'should return last but one element'},
    ], function (options) {
      it(name, function () {
        this.testNode.innerHTML = '<p>first</p><p>second</p><p>third</p><p>fourth</p>';
        var eqElement = eq(this.testNode.childNodes, options.index);
        eqElement.innerHTML.should.equal(options.result);
      });
    });
  });

  describe('isElement', function () {
    it('should return true for valid DOM element', function () {
      isElement(this.testNode).should.be.true;
    });

    it('should return false for document', function () {
      isElement(document).should.be.false;
    });

    it('should return false for non dom element', function () {
      isElement("some text").should.be.false;
    });

    // it('should return true for valid list of DOM elements', function () {
    //   this.testNode.innerHTML = '<p>first</p><p>second</p><p>third</p><p>fourth</p>';
    //   isElement(this.testNode.childNodes).should.be.true;
    // });
  });

});


