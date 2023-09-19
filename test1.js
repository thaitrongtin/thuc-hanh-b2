const urlBacon = "http://localhost:3000/posts";
(function () {
  $.ajax({ method: "GET", url: urlBacon, dataType: "json" })
    .done(function (data) {
      console.log(data);
    })
    .fail(function () {
      alert("no good");
    });
})();
