/* global define */
define(
  [
    'jquery',
    'brix/base',
    'brix/loader',
    'text!./default.html'
  ],
  function(
    $,
    Base,
    Loader,
    template
  ) {
    return Base.extend({
      render: function() {
        var view = this.options.argv.shift();
        this.element.innerHTML = template;

        Loader.load($('#inmain', this.element), view);
      }
    });
  }
)