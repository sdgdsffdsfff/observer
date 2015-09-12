define(
  [
    'jquery',
    'brix/base',
    'underscore',
    'handlebars',
    'text!./footer.html'
  ],
  function($, Base, _, Handlebars, template) {
    return Base.extend({
      render: function() {
        var me = this
        $.ajax({
          url: 'http://www.taobao.com/go/rgn/mm/footer.php',
          dataType: 'jsonp',
          data: {
            mode: 'simple'
          }
        })
        .done(function(html) {
          me.element.innerHTML = Handlebars.compile(template)({
            html: _.unescape(html)
          });
        })
      }
    })
  }
)