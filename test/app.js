'use strict';

var will = require('willy').will;
var app = require('../app.js');

describe('sanity', function () {
  it('should load', function () {
    will(app).exist();
  });
});
