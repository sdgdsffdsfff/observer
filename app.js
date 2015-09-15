var koa = require('koa');
var path = require('path');
var config = require('./config/');
var router  = require('./router/');
var statics = require('koa-static');
var bodyParser = require('koa-body-parser');

var app = koa();

var port = process.env.PORT || config.port || 3000;

app.use(statics(path.join(__dirname, 'public')));
app.use(bodyParser());

router(app);

app.listen(port, function() {
  console.log('listening on port ' + port + '.');
});