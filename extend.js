
/**
 * lodash 中 extend 和 defaults 以及 merge 的不同处理
 */



/**
 * 遍历源对象的所有属性，将其复制到目录对象上。
 * 如果有重复，源对象属性会覆盖目录对象属性。
 */

function extend(target, source) {
  if (target && source) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  }
  return target;
}


/**
 * 遍历源对象的所有属性，如果属性在目标对象上不存在，则将其复制到目标对象上
 */

function defaults(target, source) {
  if (target && source) {
    for (var prop in source) {
      if (target[prop] === void 0) {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}


function merge(target, source) {



}




