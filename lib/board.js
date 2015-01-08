'use strict';

var Tile = require('./tile');
var boardsUtil = require('./util');
var elementMixin = require('./element');

/**
 * Create a matrix of tiles.
 * @param {Number} rows - number of rows in the matrix
 * @param {Number} cols - number of columns in the matrix
 * @return {Array}
 */
var createMatrix = function(rows, cols) {
  var matrix = [];
  for(var i = 0; i < rows; i++) {
    var row = [];
    for(var j = 0; j < cols; j++) {
      row.push(new Tile(document.createElement('DIV')));
    }
    matrix.push(row);
  }
  return matrix;
};

/**
 * Represents the board as a whole.
 * @constructor
 * @param {Number} rows - rows on the board
 * @param {Number} cols - columns on the board
 */
function Board(rows, cols) {
  this.element = document.createElement('div');
  this.tiles = createMatrix(rows, cols);
}

Board.prototype = boardsUtil.mixin(Board.prototype, elementMixin);

module.exports = Board;
