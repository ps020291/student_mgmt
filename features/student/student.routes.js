var express = require('express');

var ctrl  = require('./student.controller');
// creating a group in express app
var routes = express.Router();

module.exports = routes;

// GET
routes.get('/search',ctrl.search);
routes.get('/search',ctrl.search);
routes.get('/search',ctrl.search);
routes.get('/search',ctrl.search);
routes.get('/search',ctrl.search);
routes.get('/search',ctrl.search);
routes.get('/search',ctrl.search);
routes.get('/search',ctrl.search);
routes.get('/search',ctrl.search);


// Post
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);
routes.post('/create',ctrl.create);