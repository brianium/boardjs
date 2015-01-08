'use strict';

var ElementContainer = require('./element');
var util = require('util');

/**
 * Represents a single tile on the board.
 * @constructor
 * @param {HTMLElement} element - the dom element of the tile
 */
function Tile(element) {
  this.element = element;
}

util.inherits(Tile, ElementContainer);

module.exports = Tile;
