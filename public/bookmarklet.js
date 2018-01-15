var newURL = document.URL;
console.log("newURL: " + newURL);

$.ajax({
    url: "https://limitless-refuge-66019.herokuapp.com/api/new",
    method: "POST",
    data: {newURL: newURL }
  }).done(function(response) {
    console.log(response);
  });