/* global define */
define(
  [
    'jquery',
    'handlebars',
    'brix/base',
    'brix/loader',
    'text!./index.html'
  ],
  function(
    $,
    Handlebars,
    Base,
    Loader,
    template
  ) {
    return Base.extend({
      render: function() {
        this.element.innerHTML = template;
      }
    });
  }
)