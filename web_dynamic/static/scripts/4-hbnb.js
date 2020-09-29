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
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (places) {
      places.forEach(place => {
        const s = (place.max_guest !== 1) ? 's' : '';
        const s2 = (place.number_rooms !== 1) ? 's' : '';
        const s3 = (place.number_bathrooms !== 1) ? 's' : '';
        const html = `<article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guest${s}</div>
          <div class="number_rooms">${place.number_rooms}
            Bedroom${s2}</div>
          <div class="number_bathrooms">${place.number_bathrooms}
            Bathroom${s3}</div>
        </div>
        <div class="user">
          
        </div>
        <div class="description">
          ${place.description}
        </div>
      </article>`;
        $('.places').append(html);
      });
    }
  });
});