$(document).ready(function() {
    let check_list = {};
    $('li input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")){
      check_list[$(this).data("id")] = $(this).data("name")
    } else {
      delete list_check[$(this).data("id")]
  }
      const values = Object.values(check_list)
      const addlist = values.join(', ')
      const short = addlist.slice(0, 30)
      $('.amenities h4').text(short + '...')
      if (values.length === 0) $('.amenities h4').html('&nbsp;');
  });
});
