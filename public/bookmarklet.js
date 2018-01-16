var newURL = document.URL;
console.log("newURL: " + newURL);

// ===============CORS CODE=========================================
jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});
// =================================================================        


$.ajax({
    url: "https://limitless-refuge-66019.herokuapp.com/api/new",
    method: "POST",
    crossDomain: true,
    data: {newURL: newURL }
  }).done(function(response) {
    alert("Added your page to the database. " + response);
    console.log(response);
  });