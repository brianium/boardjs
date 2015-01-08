var Board = Boards.Board;

describe('Board', function() {
  describe('construction', function() {
    it('should create a board element', function() {
      var board = new Board(1,1);
      expect(board.element.tagName).toBe('DIV');
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
});
