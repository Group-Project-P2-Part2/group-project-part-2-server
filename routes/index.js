const route = require('express').Router();
const Controller = require('../controllers/index')

route.get('/question', Controller.getQuestion)


module.exports = route