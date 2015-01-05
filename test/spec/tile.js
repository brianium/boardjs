var Tile = Board.Tile;

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
    });

    describe('.off()', function() {
      it('should remove a listener for an event on the tile element', function() {
        this.tile.on('click', this.click);
        this.tile.off('click', this.click);
        this.tile.element.dispatchEvent(this.evt);
        expect(this.tile.element.style.color).toBe('');
      });
    });

  });
});
