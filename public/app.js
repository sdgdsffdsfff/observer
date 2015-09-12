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

    function handle(view, notfound) {
      return function() {
        var argv = Array.prototype.slice.call(arguments);
        var frame = notfound || 'views/default';
        argv.unshift(view);
        Loader.load($('#content'), frame, {
          argv: argv
        }, function() {
          console.log('page loaded complete');
        })
      }
    }

    function init() {
      var router = new Router();
      router.configure({
        notfound: handle(null, 'views/common/404')
      });

      //路由控制 
      router.on(/!\/index/, handle('views/index'));
      router.init();
    }

    // 启动
    init();
  }
);