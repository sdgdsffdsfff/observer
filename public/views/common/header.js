define(
  [
    'jquery',
    'brix/base',
    'handlebars',
    'text!./header.html'
  ],
  function($, Base, Handlebars, template) {
    return Base.extend({
      render: function() {
        this.element.innerHTML = Handlebars.compile(template)();
      }
    });
  }
);