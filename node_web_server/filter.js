
var _ = require('lodash');
var Mapper = require('./mapper');



var Filter = exports = module.exports = {};



Filter.filters = [];


Filter.filter = function(expression, handler, options) {
  if (_.isFunction(expression)) {
    options = handler;
    handler = expression;
    expression = null;
  }

  var mapper = new Mapper(expression, handler, options);
  Filter.filters.push(mapper);

  return this;
};


module.exports = {

  filters: [],


  filter: function(expression, handler, options) {
    if (_.isFunction(expression)) {
      options = handler;
      handler = expression;
      expression = null;
    }
    var mapper = new Mapper(expression, handler, options);
    this.filters.push(mapper);
    return this;
  },


  session: function(expression, handler, options) {
    this.filter(expression, handler, options);
    var lastFilterIndex = this.filters.length - 1;
    this.filters[lastFilterIndex].session = true;
    return this;
  },


  file: function(expression, handler, options) {
    var mapper = new Mapper(expression, handler, {file: true});
    this.filters.splice(0, 0, mapper);
    return this;
  }


};