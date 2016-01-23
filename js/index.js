$(document).ready(function() {
  var api = 'http://www.freecodecamp.com/news/hot';
  var user = '';
  var userPicture = '';
  var postPicture = '';
  var headline = '';
  var link = '';
  var upvotes = 0;
  var time = 0;
  var item = '';
  var errorPicture = 'https://dl.dropboxusercontent.com/u/27247835/FreeCodeCamp/camperizer/stoppedworking.jpg';

  $.getJSON(api, function(data) {
    for (var news in data) {
      user = data[news].author.username;
      userPicture = data[news].author.picture;
      postPicture = data[news].image;
      headline = data[news].headline;
      link = data[news].link
      upvotes = data[news].upVotes.length;
      time = new Date(data[news].timePosted).toGMTString().slice(0, -13);
      console.log(postPicture);
      item =
        "<div class='story'>" +
        "<a href='" + link + "'><img class='pic' src='" + userPicture + "'/>" +
        "<h4>" + headline + "</h4></a>" +
        "<div class='description text-left'>" +
        "<span><strong>" + headline.substr(0, 20) + '...' + "</strong></span><br />" +
        "<span>By <a href='http://freecodecamp.com/" + user + "'>" + user + "</a><br /></span>" +
        "<span><i class='fa fa-heart'></i>" + " " + upvotes + "</span>" +
        "<span class='pull-right'>" + time + "</span>" +
        "</div></div>";

      // Append ALL THE THINGS!
      $('.news').append(item);
    }
  });
});