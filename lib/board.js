'use strict';

var Tile = require('./tile');
var util = require('util');
var ElementContainer = require('./element-container');
var _ = require('lodash');

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
 * Create the tiles collection for this board.
 * @param {Number} rows - number of tile rows
 * @param {Number} cols - number of tile columns
 * @return {Array}
 */
var createTiles = function(rows, cols) {
  var tiles = createMatrix(rows, cols);
  Object.defineProperty(tiles, 'all', {
    get: function() {
      return _.flatten(this);
    }
  });
  return tiles;
};

var defaultOptions = {
  rowClass: 'tile-row',
  tileClass: 'tile'
};

/**
 * Represents the board as a whole.
 * @constructor
 * @param {Number} rows - rows on the board
 * @param {Number} cols - columns on the board
 * @param {Object} opts - board options
 */
function Board(rows, cols, opts) {
  this.element = document.createElement('div');
  this.rows = rows;
  this.cols = cols;
  this.tiles = createTiles(rows, cols);
  if (!opts) {
    opts = {};
  }
  this.options = _.extend(opts, defaultOptions);
}

util.inherits(Board, ElementContainer);

/**
 * Create a row element to hold tile elements.
 * @param {String} rowClass - the class to use for the row element
 * @return {HTMLElement}
 */
function createBoardRow(rowClass) {
    var row = document.createElement('div');
    row.classList.add(rowClass);
    return row;
}

/**
 * Append the board element to the target element.
 *
 * @param {HTMLElement} elem - the element to append to
 * @return {Board}
 */
Board.prototype.appendTo = function(elem) {
  for(var i = 0; i < this.rows; i++) {
    var row = createBoardRow(this.options.rowClass);
    for (var j = 0; j < this.cols; j++) {
      this.tiles[i][j].addClass(this.options.tileClass).appendTo(row);
    }
    this.element.appendChild(row);
  }
  elem.appendChild(this.element);
  return this;
};

module.exports = Board;
