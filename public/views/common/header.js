define(
  [
    'jquery',
    'brix/base',
    'text!./header.html'
  ],
  function($, Base, template) {
    return Base.extend({
      render: function() {
        this.element.innerHTML = template;
      }
    });
  }
);