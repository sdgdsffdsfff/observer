var route = require('koa-route');

module.exports = function(app) {
  app.use(route.post('/api/form/submit', require('../controllers/form')));
}