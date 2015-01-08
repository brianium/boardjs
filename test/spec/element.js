var mixin = Boards.Element,
    util = Boards.util;

describe('Element', function() {
  beforeEach(function() {
    this.board = {
      element: document.createElement('div')
    };
    this.board = util.mixin(this.board, mixin);
  });

  describe('.addClass()', function() {
    it('should add a class to the underlying element', function() {
      this.board.addClass('test');
      expect(this.board.hasClass('test')).toBe(true);
    });
  });

  describe('.removeClass()', function() {
    it('should remove a class from the underlying element', function() {
      this.board.addClass('test').removeClass('test');
      expect(this.board.hasClass('test')).toBe(false);
    });
  });

  describe('.hasAttr()', function() {
    it('should return true if attr is set', function() {
      this.board.element.setAttribute('id', 'my-id');
      expect(this.board.hasAttr('id')).toBe(true);
    });

    it('should return false if attr is not set', function() {
      expect(this.board.hasAttr('id')).toBe(false);
    });
  });

  describe('.attr()', function() {
    it('should set an attr with 2 arguments', function() {
      this.board.attr('id', 'hello');
      expect(this.board.hasAttr('id')).toBe(true);
    });

    it('should get an attr if only 1 argument', function() {
      this.board.attr('id', 'hello');
      expect(this.board.attr('id')).toBe('hello');
    });

    it('should set multiple attributes if an object is given', function() {
      this.board.attr({
        id: 'hello',
        title: 'title'
      });
      expect(this.board.attr('id')).toBe('hello');
      expect(this.board.attr('title')).toBe('title');
    });
  });
});
