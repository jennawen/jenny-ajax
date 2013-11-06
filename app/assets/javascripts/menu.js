var Menu = {
  init: function() {
    $('a.new-menu').on('click', this.toggleMenuForm);

    $('form#new_menu').on('ajax:success', this.appendMenu);
    $('form#new_menu').on('ajax:error', this.appendErrors);
  },

  toggleMenuForm: function(e) {
    e.preventDefault();
    $('form#new_menu').toggleClass('hidden');
  },


  toggleDetailForm: function(e) {
    e.preventDefault();
    debugger
    $('.detail_form').toggleClass('.detail_form');
  },

  appendMenu: function(event, data) {
    $('ul.menus').append(data.menu_template);
  },

  appendErrors: function(event, xhr, status, error) {
    $('ul.menus').before($.parseJSON(xhr.responseText).error);
  }
}

$(document).ready(function() {
  Menu.init();
})
