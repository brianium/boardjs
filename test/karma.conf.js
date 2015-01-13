module.exports = function(config) {
  config.set({

    frameworks: ['jasmine', 'browserify'],

    files: ['spec/*.js'],

    reporters: ['dots'],

    singleRun: true,
    autoWatch: false,

    preprocessors: {
      'spec/*.js': ['browserify']
    },

    browsers: ['PhantomJS'],
  });
};
