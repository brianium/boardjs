var lib = '../dist/board.js',
    tests = 'spec/*.js';

module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    files: [lib, tests],

    reporters: ['dots'],

    singleRun: true,
    autoWatch: false,

    browsers: ['PhantomJS'],
  });
};
