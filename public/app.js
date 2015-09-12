require(
  [
    'jquery',
    'director',
    'brix/loader'
  ],
  function($, Router, Loader) {

    if (!location.hash) {
      location.hash = '#!/index'
    }

    var App = {
      init: init
    }

    App.init();

    function init() {
      App.router = new Router()
      App.router.configure({
        notfound: handle(null, 'views/notfound')
      })
      App.router.on(/!\/index/, handle('views/index'))
      App.router.init();
      App.router.nav = function(path) {
        location.hash = '#!' + path
      }

      function handle(view, notfound) {
        return function() {
          var argv = Array.prototype.slice.call(arguments)
          var frame = notfound || 'views/default';
          argv.unshift(view)
          Loader.load($('#content'), frame, {
            argv: argv
          }, function() {
            console.log('page loaded complete')
          })
        }
      }
    }

    window.App = App
  })