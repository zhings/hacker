

function extend(object, source) {
  if (object && source) {
    for (var prop in source) {
      object[prop] = source[prop];
    }
  }
  return object;
}

exports.extend = extend;