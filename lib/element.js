'use strict';

/**
 * Set multiple attributes based on object keys.
 *
 * @param {HTMLElement} elem - the element to set attributes on
 * @param {Object} attrs - object with key/value pairs to set attributes
 */
function setAttrs(elem, attrs) {
  var k;
  for(k in attrs) {
    if (attrs.hasOwnProperty(k)) {
      elem.setAttribute(k, attrs[k]);
    }
  }
}

var ElementMixin = {
  /**
   * Add a class to the underlying element.
   * @param {String} cls - the class to add
   */
  addClass: function(cls) {
    this.element.classList.add(cls);
    return this;
  },

  /**
   * Remove a class from the underlying element.
   * @param {String} cls - the class to remove
   */
  removeClass: function(cls) {
    this.element.classList.remove(cls);
    return this;
  },

  /**
   * Check if the underlying element has a class.
   * @param {String} cls - the class to check for
   */
  hasClass: function(cls) {
    return this.element.classList.contains(cls);
  },

  /**
   * Check if the underlying element has the named attribute.
   *
   * @param {String} attr - the attr name to check for
   */
  hasAttr: function(attr) {
    return this.element.hasAttribute(attr);
  },
  
  /**
   * Get or set attributes on the underlying element.
   *
   * If one argument is provided as a string it will fetch the attribute.
   * If one argument is provided as an object, multiple attrs are set and the mixin is returned.
   * If two arguments are provided the named attr is set and the mixin is returned.
   */
  attr: function() {
    if (arguments.length === 2) {
      this.element.setAttribute(arguments[0], arguments[1]);
      return this;
    }
    var arg = arguments[0];
    if (typeof(arg) === 'object') {
      setAttrs(this.element, arg);
      return this;
    }
    return this.element.getAttribute(arg);
  }
};

module.exports = ElementMixin;
