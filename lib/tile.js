'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var events = require('./events');

/**
 * Represents a single tile on the board.
 * @constructor
 * @param {HTMLElement} element - the dom element of the tile
 */
function Tile(element) {
  this.element = element;
}

util.inherits(Tile, EventEmitter);

/**
 * Simple event delegation to the Tile element's addEventListener method. If
 * the given type is not a standard dom event, it will be registered as a 
 * custom event on the Tile itself.
 *
 * @param {String} type - the event type
 * @param {Function} listener - a function to execute when the event is triggered
 * @param {Boolean} useCapture - prevent bubble when set to true - only valid for event callbacks
 */
Tile.prototype.on = function(type, listener, useCapture) {
  if (!events.isDomEvent(type)) {
    return EventEmitter.prototype.on.call(this, type, listener);
  }

  this.element.addEventListener(type, listener, !!useCapture);
  return this;
};

/**
 * Simple event delegation to the tile element's removeEventListener method.
 *
 * @param {String} type - the event type
 * @param {Function} listener - the listener to remove
 * @param {Boolean} useCapture - if the original listener was set to use capture or not
 */
Tile.prototype.off = function(type, listener, useCapture) {
  if (!events.isDomEvent(type)) {
    return EventEmitter.prototype.removeListener.call(this, type, listener);
  }

  this.element.removeEventListener(type, listener, !!useCapture);
};

module.exports = Tile;
