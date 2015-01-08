'use strict';

var ElementMixin = {
  addClass: function(cls) {
    this.element.classList.add(cls);
  }
};

module.exports = ElementMixin;
