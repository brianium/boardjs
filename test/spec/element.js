var mixin = Boards.Element,
    util = Boards.util;

describe('Element', function() {
  beforeEach(function() {
    this.board = {
      element: document.createElement('div')
    };
    this.board = util.mixin(this.board, mixin);
  });

  describe('addClass', function() {
    it('should add a class to the underlying element', function() {
      this.board.addClass('test');
      expect(this.board.element.classList.contains('test')).toBe(true);
    });
  });
});
