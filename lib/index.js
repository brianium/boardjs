'use strict';

var Boards = {};

Boards.Board = require('./board');
Boards.Tile = require('./tile');

/**
 * Factory for creating a board.
 *
 * @param {Number} rows - the number of rows on the board
 * @param {Number} columns - the number of columns on the board
 * @param {Object} options - boardsjs options
 */
Boards.create = function(rows, columns, options) {
  return new Boards.Board(rows, columns, options);
};

window.Boards = Boards;
