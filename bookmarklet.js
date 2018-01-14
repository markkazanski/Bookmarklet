var newURL = document.URL;
console.log("newURL: " + newURL);

$.ajax({
    url: "https://httpbin.org/post",
    method: "POST",
    data: {newURL: newURL }
  }).done(function(response) {
    console.log(response);
  });