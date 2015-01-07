var util = {};

/**
 * Mix src into dest.
 *
 * @param {Object} dest - the destination to copy to
 * @param {Object} src - the object to mix in to dest
 * @return {Object}
 */
util.mixin = function(dest, src) {
  var k;
  for (k in src) {
    if (src.hasOwnProperty(k)) {
      dest[k] = src[k];
    }
  }
  return dest;
};

module.exports = util;
