var Tile = require('../../lib/tile');

describe('Tile', function() {
  beforeEach(function() {
    this.element = document.createElement('div');
    this.tile = new Tile(this.element);
  });

  describe('events', function() {

    beforeEach(function() {
      //deprecated, but phantom does not support constructors yet
      this.evt = document.createEvent('Event');
      this.evt.initEvent('click', true, true);
      this.click = function() {
        this.style.color = 'red';
      };
    });

    describe('.on()', function() {
      it('should register an event with the tile element', function() {
        this.tile.on('click', this.click);
        this.tile.element.dispatchEvent(this.evt);
        expect(this.tile.element.style.color).toBe('red');
      });

      it('should register a container property on the element', function() {
        var container = null;
        this.tile.on('click', function() {
          container = this.container;
        });
        this.tile.element.dispatchEvent(this.evt);
        expect(container).toBe(this.tile);
      });

      it('should allow non dom events', function() {
        var val = null;
        this.tile.on('custom', function(v) {
          val = v;
        });
        this.tile.emit('custom', 'hello');
        expect(val).toBe('hello');
      });
    });

    describe('.off()', function() {
      it('should remove a listener for an event on the tile element', function() {
        this.tile.on('click', this.click);
        this.tile.off('click', this.click);
        this.tile.element.dispatchEvent(this.evt);
        expect(this.tile.element.style.color).toBe('');
      });      
      
      it('should allow non dom events', function() {
        var listener = function() { };
        this.tile.on('custom', listener);
        this.tile.off('custom', listener);
        expect(this.tile.listeners('custom').length).toBe(0);
      });

    });

  });

  it('should have element mixin behavior', function() {
    this.tile.addClass('tile');
    expect(this.tile.hasClass('tile')).toBe(true);
  });
});
