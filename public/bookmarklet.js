var newURL = document.URL;
console.log("newURL: " + newURL);

$.ajax({
    url: "http://localhost:3000/api/new",
    method: "POST",
    data: {newURL: newURL }
  }).done(function(response) {
    console.log(response);
  });