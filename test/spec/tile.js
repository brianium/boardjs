var Tile = Board.Tile;

describe('Tile', function() {
  beforeEach(function() {
    this.element = document.createElement('div');
  });

  describe('#new', function() {
    it('should be constructed with an element', function() {
      var tile = new Tile(this.element);
      expect(tile.element).not.toBeUndefined();
    });
  });
});
