
var root = this;


if (!Function.prototype.bind) {
  Function.prototype.bind = function(context) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    var args = Array.prototype.slice.call(arguments, 1);
    var noop = function() {};
    var self = this;
    var bound = function() {
      var ctx;
      if (this instanceof noop && context) {
        ctx = this;
      } else {
        ctx = context || root;
      }

      return self.apply(ctx, [].slice.call(arguments));
    };

    noop.prototype = this.prototype;
    bound.prototype = new noop();

    return bound;
  };
}