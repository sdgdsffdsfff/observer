/* global define */
define(
  [
    'jquery',
    'handlebars',
    'brix/base',
    'brix/loader',
    'text!./default.html'
  ],
  function(
    $,
    Handlebars,
    Base,
    Loader,
    template
  ) {
    function Frame() {}
    Frame.prototype = {
      render: function() {
        var view = this.options.argv.shift()
        this.element.innerHTML = Handlebars.compile(template)();
        
        Loader.load($('#inmain', this.element), view, {
          argv: this.options.argv
        }, function() {})
      }
    }
    return Frame
  }
)