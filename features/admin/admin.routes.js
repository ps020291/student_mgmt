var express = require('express');
// creating a group in express app
var routes = express.Router();
var ctrl = require('./admin.controller');
module.exports = routes;

routes.get('/search',ctrl.search);

routes.get("/new-group/:groupname",ctrl.newGroup);

routes.post('/create-batch',ctrl.createBatch);
routes.get('/list-batch',ctrl.listBatch);
routes.post('/register-student',ctrl.registerStudent);
