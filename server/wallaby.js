module.exports = function (wallaby) {
  process.env.NODE_ENV = 'test';

  return {
    files: [
      { pattern: '.eslintignore', instrument: false },
      { pattern: '.eslintrc', instrument: false },
      'src/*.js',
      'src/**/*.js',
      'src/**/**/*.js',
      'src/**/**/**/*.js',
      'src/**/**/**/**/*.js',
      { pattern: 'configs/*.js', instrument: true },
      { pattern: 'logs/*.log', instrument: false },
      { pattern: 'src/models/*.js', instrument: false },
      '*.js',
      { pattern: 'src/tests/*Spec.js', ignore: true },
      { pattern: 'src/tests/**/*Spec.js', ignore: true },
      { pattern: 'wallaby.js', ignore: true }
    ],

    tests: [
      'src/tests/*Spec.js',
      'src/tests/**/*Spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'mocha',
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    setup: function (w) {
      require('babel-register')({});
      // var server = require('./server.js');
      var chai = require('chai');
      // var chaiHttp = require('chai-http');
      var mocha = w.testFramework;
      var expect = chai.expect();
      var should = chai.should()

      mocha.timeout(5000);

    },
    workers: {
      recycle: true
    }
  };
};