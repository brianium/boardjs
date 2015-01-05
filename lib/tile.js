/**
 * Represents a single tile on the board.
 * @constructor
 * @param {HTMLElement} element - the dom element of the tile
 */
function Tile(element) {
  this.element = element;
}

/**
 * Simple event delegation to the tile element's addEventListener method.
 *
 * @param {String} type - the event type
 * @param {Function} listener - a function to execute when the event is triggered
 * @param {Boolean} useCapture - prevent bubble when set to true - only valid for event callbacks
 */
Tile.prototype.on = function(type, listener, useCapture) {
  useCapture || (useCapture = false);
  this.element.addEventListener(type, listener, useCapture);
};

/**
 * Simple event delegation to the tile element's removeEventListener method.
 *
 * @param {String} type - the event type
 * @param {Function} listener - the listener to remove
 * @param {Boolean} useCapture - if the original listener was set to use capture or not
 */
Tile.prototype.off = function(type, listener, useCapture) {
  useCapture || (useCapture = false);
  this.element.removeEventListener(type, listener, useCapture);
};

module.exports = Tile;
