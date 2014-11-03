/* Main script file */
'use strict';

$(document).ready(function() {

  var data = [];

  $.getJSON('data.json').done(
    function(e) {
      var house = e['House'];
      var senate = e['Senate'];

    for (var i = 0; i < senate.length; i++) {
      $('<div class="prose freshman">' +
          '<div class="headshot">' +
            '<img src="//s3.amazonaws.com/static.texastribune.org/media/IncomingFreshman2015/'+ senate[i].Photo_URL + '">' +
          '</div>' +
          '<div class="info">' +
            '<h3>' + senate[i].Name + ' (' + senate[i].Party + ') &mdash; SD-' + senate[i].District + '</h3>' +
            '<p>' + senate[i].Bio + '</p>' +
            '<ul>' +
              '<li><span class="header">Hometown: </span>' + senate[i].Hometown + ' </li>' +
              '<li><span class="header">Age: </span>' + senate[i].Age + '  </li>' +
              '<li><span class="header">Family: </span>' + senate[i].Family + '  </li>' +
              '<li><span class="header">Religion: </span>' + senate[i].Religion + '  </li>' +
              '<li><span class="header">Occupation: </span>' + senate[i].Occupation + '  </li>' +
              '<li><span class="header">Education: </span>' + senate[i].Education + '  </li>' +
            '</ul>' +
          '</div>' +
          '<hr class="yellow">' +
        '</div>').appendTo('.graphic-senate');
    }

    for (var i = 0; i < house.length; i++) {
      $('<div class="prose freshman">' +
          '<div class="headshot">' +
            '<img src="//s3.amazonaws.com/static.texastribune.org/media/IncomingFreshman2015/'+ house[i].Photo_URL + '">' +
          '</div>' +
          '<div class="info">' +
            '<h3>' + house[i].Name + ' (' + house[i].Party + ') &mdash; HD-' + house[i].District + '</h3>' +
            '<p>' + house[i].Bio + '</p>' +
            '<ul>' +
              '<li><span class="header">Hometown: </span>' + house[i].Hometown + ' </li>' +
              '<li><span class="header">Age: </span>' + house[i].Age + '  </li>' +
              '<li><span class="header">Family: </span>' + house[i].Family + '  </li>' +
              '<li><span class="header">Religion: </span>' + house[i].Religion + '  </li>' +
              '<li><span class="header">Occupation: </span>' + house[i].Occupation + '  </li>' +
              '<li><span class="header">Education: </span>' + house[i].Education + '  </li>' +
            '</ul>' +
          '</div>' +
          '<hr class="yellow">' +
        '</div>').appendTo('.graphic-house');
    }



  });
  function build(e) {


  }

});
