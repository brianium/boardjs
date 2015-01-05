(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Board = window.Board = {};

Board.Tile = require('./tile');

},{"./tile":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
