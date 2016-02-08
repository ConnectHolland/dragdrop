'use strict';

var gulp = require('gulp');
var taskLoader = require('gulp-simple-task-loader');
var plugins = require('gulp-load-plugins')();
var config = require('./config.json');

taskLoader({
    taskDirectory: 'bower_components/gulp-tasks/tasks',
    plugins: plugins,
    config: config
});
