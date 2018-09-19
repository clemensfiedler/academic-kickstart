(function($){

  $('.showAbstract').click(function(){
    var abstract_ele = $(this).closest('.row').find('.pub-abstract');
    if (abstract_ele.hasClass('shown')) {
      abstract_ele.hide();
      abstract_ele.removeClass('shown');
      $(this).html('View abstract');
    } else {
      abstract_ele.show();
      abstract_ele.addClass('shown');
      $(this).html('Hide abstract');
    }
  })
