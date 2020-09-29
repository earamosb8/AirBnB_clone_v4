$(document).ready(function() {
    let check_list = {};
    $('li input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")){
      check_list[$(this).data("id")] = $(this).data("name")
    } else {
      delete check_list[$(this).data("id")]
  }
      const values = Object.values(check_list)
      const addlist = values.join(', ')
      const short = addlist.slice(0, 30)
      $('.amenities h4').text(short + '...')
      if (values.length === 0) $('.amenities h4').html('&nbsp;');
  });
  const url = 'http://127.0.0.1:5001/api/v1/status/';
  $.get(url, function (info) {
    if (info.status === 'OK') {
      console.log("entre");
      $('#api_status').addClass('available');
      
    } else {
      $('#api_status').removeClass('available');
      console.log("entre");
    }
  }); 
});