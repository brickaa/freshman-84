/* Main script file */
'use strict';

$(document).ready(function() {

  var data = [];

  //Load JSON data from Google Spreadsheet
  $.getJSON('https://spreadsheets.google.com/feeds/list/1ZBTQHa7qtC7enQkIm3JutxGnZlh5TwWME2WRKMstL7g/od6/public/values?alt=json', function(json) {
    data = json;
  }).done( function() {
    console.log(data.feed.entry[0]);
    build(data);
  });

  function build(data) {

    for (var i = 0; i < data.feed.entry.length; i++) {
      var model = data.feed.entry[i];
      var name = model.gsx$name.$t;
      var party = model.gsx$party.$t;
      var chamber = model.gsx$chamber.$t;
      var district = model.gsx$district.$t;
      var hometown = model.gsx$hometown.$t;
      var age = model.gsx$age.$t;
      var bio = model.gsx$bio.$t;
      var occupation = model.gsx$occupation.$t;
      var education = model.gsx$education.$t;
      var relationship = model.gsx$relationshipstatus.$t;
      var kids = model.gsx$numberkids.$t;
      var religion = model.gsx$religion.$t;

      $('<div class="prose freshman">' +
          '<div class="headshot">' +
            '<img src="http://www.fillmurray.com/131/197">' +
          '</div>' +
          '<div class="info">' +
            '<h3>' + name + ' (' + party + ') &mdash; HD-' + district + '</h3>' +
            '<p>Here is a brief biography of this person. Like how they claimed Mount Everest, took over the family fridge delivery business and survived a monsoon wedding. Very informative, yet concise.</p>' +
            '<ul>' +
              '<li><span class="header">Hometown: </span>' + hometown + ' </li>' +
              '<li><span class="header">Age: </span>' + age + '  </li>' +
              '<li><span class="header">Relationship status: </span>' + relationship + '  </li>' +
              '<li><span class="header">Children: </span>' + kids + '  </li>' +
              '<li><span class="header">Religion: </span>' + religion + '  </li>' +
              '<li><span class="header">Occupation: </span>' + occupation + '  </li>' +
              '<li><span class="header">Education: </span>' + education + '  </li>' +
            '</ul>' +
          '</div>' +
          '<hr class="yellow">' +
        '</div>').appendTo('.graphic');
    }
  }

});
