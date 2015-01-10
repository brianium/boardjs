var Board = Boards.Board;

describe('Board', function() {
  describe('construction', function() {
    it('should create a board element', function() {
      var board = new Board(1,1);
      expect(board.element.tagName).toBe('DIV');
    });

    it('should set the class to the boardClass option', function() {
      var board = new Board(1, 1, {
        boardClass: 'rad-board'
      });
      expect(board.hasClass('rad-board')).toBe(true);
    });

    it('should create a board with tiles', function() {
      var board = new Board(2, 2);
      expect(board.tiles[0][0]).not.toBeUndefined();
      expect(board.tiles[0][1]).not.toBeUndefined();
      expect(board.tiles[1][0]).not.toBeUndefined();
      expect(board.tiles[1][1]).not.toBeUndefined();
    });
  });

  it('should have element mixin behavior', function() {
    var board = new Board(1,1);
    board.attr('id', 'board');
    expect(board.attr('id')).toBe('board');
  });


  describe('.tiles', function() {
    it('should return flattened collection via all property', function() {
      var board = new Board(3,3),
          tiles = board.tiles.all;
      expect(tiles.length).toBe(9);
    });
  });

  describe('.appendTo()', function() {
    it('should append a board structure to the given element', function() {
      var target = document.createElement('div'),
          board = new Board(2,3);

      board.appendTo(target);

      var rows = target.getElementsByClassName(board.options.rowClass);
      expect(rows.length).toBe(2);

      for(var i = 0; i < rows.length; i++) {
        var tiles = rows[i].getElementsByClassName(board.options.tileClass);
        expect(tiles.length).toBe(3);
      }
    });
  });
});
