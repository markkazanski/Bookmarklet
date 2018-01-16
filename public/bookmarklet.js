var newURL = document.URL;
console.log("newURL: " + newURL);

window.onload = function(){ alert("Window onload fired"); }

//add jQuery if missing
if(!window.jQuery){
  var script = document.createElement('script');
  script.src = '//code.jquery.com/jquery-1.11.0.min.js';
  document.getElementsByTagName('head')[0].appendChild(script); 
  location.reload();
}

// ===============CORS CODE=========================================
jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});
// =================================================================        

//POST
/*
$.ajax({
    url: "https://limitless-refuge-66019.herokuapp.com/api/new",
    method: "POST",
    crossDomain: true,
    data: {newURL: newURL }
  }).done(function(response) {
    //alert("Added your page to the database. " + response);
    console.log(response);
  });
*/

//GET
$.ajax({
  url: `https://limitless-refuge-66019.herokuapp.com/api/new?newURL=${newURL}`,
  method: "GET",
  crossDomain: true
}).done(function(response) {
  //alert("Added your page to the database. " + response);
  $("body").append($("<div id='modal'>"));
  $("#modal").css({'width':'100%','height':'200px','background-color':'#e44125','position':'fixed','top':'50%','z-index':'999999', 'color':'#eee5d0', 'text-align':'center', 'display':'block'});
  $("#modal").append(`<h1>Your Link Has Been Added:<br /> ${newURL}</h1>`);
  setTimeout(function(){$("#modal").remove()}, 6000);
  console.log(response);
});