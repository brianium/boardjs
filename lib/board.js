'use strict';

var Tile = require('./tile');
var util = require('util');
var ElementContainer = require('./element-container');

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
      row.push(new Tile(document.createElement('div')));
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
  this.rows = rows;
  this.cols = cols;
  this.tiles = createMatrix(rows, cols);
}

util.inherits(Board, ElementContainer);

Board.prototype.appendTo = function(elem) {
  for(var i = 0; i < this.rows; i++) {
    var row = document.createElement('div');
    row.classList.add('tile-row');
    for (var j = 0; j < this.cols; j++) {
      row.appendChild(this.tiles[i][j].addClass('tile').element);
    }
    this.element.appendChild(row);
  }
  elem.appendChild(this.element);
};

module.exports = Board;
