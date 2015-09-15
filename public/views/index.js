/* global define */
define(
  [
    'jquery',
    'brix/base',
    'brix/event',
    'brix/loader',
    'text!./index.html'
  ],
  function(
    $,
    Base,
    EventManager,
    Loader,
    template
  ) {
    return Base.extend({
      render: function() {
        var manager = new EventManager();
        this.element.innerHTML = template;

        manager.delegate(this.element, this);
      },
      submit: function() {
        var me = this;
        var valid = Loader.query($('#J_form'))[0];

        if (valid.isValid()) {
          var _targetUrl = $('#J_url').val();
          $.ajax({
            url: '/api/form/submit',
            type: 'post',
            data: {
              url: _targetUrl
            },
            dataType: 'json',
            success: function(resp) {
              if (!resp.isOk) {
                console.log(resp.message);
              }
            }
          });
        }
      }
    });
  }
)