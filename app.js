var koa = require('koa');
var path = require('path');
var config = require('./config/');
var statics = require('koa-static');
var app = koa();

var port = process.env.PORT || config.port || 3000;

app.use(statics(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log('listening on port ' + port + '.');
});