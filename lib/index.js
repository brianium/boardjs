'use strict';

var Boards = {};

Boards.Board = require('./board');
Boards.Tile = require('./tile');
Boards.ElementContainer = require('./element-container');
Boards.util = require('./util');

window.Boards = Boards;
