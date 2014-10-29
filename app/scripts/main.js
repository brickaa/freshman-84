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
      console.log(model.gsx$name.$t);
      // $('<div>code</div>').appendTo('.whatever');
    }
  }

});
