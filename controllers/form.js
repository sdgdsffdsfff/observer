var path = require('path');
var phantom = require('phantomjs');
var child_process = require('child_process');
var binPath = phantom.path;
var pending = false;

function* form() {
  if (!pending) {
    pending = true;

    var url = this.request.body.url;
    url = url.indexOf('http') === -1 ? 'http://' + url : url;
    var childArgs = [
      path.join(__dirname, 'netsniff.js'),
      url
      // '->' + new Date().getTime() + '.har'
    ];

    try {
      var stdout = child_process.execFileSync(binPath, childArgs, {
        maxBuffer: 1024 * 2048
      });
      if (stdout) {
        pending = false;
        this.body = {
          isOk: true
        };
        // console.log(stdout.toString());
      }
    } catch (e) {
      pending = false;
      this.body = {
        isOk: false,
        message: e
      };
      // console.log(e);
    }
  }
}

module.exports = form;