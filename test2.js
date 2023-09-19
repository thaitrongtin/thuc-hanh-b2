$.ajax({
  url: "http://localhost:3000/users",
  beforeSend: function (xhr) {
    xhr.overrideMimeType("text/plain; charset=x-user-defined");
  },
}).done(function (data) {
  if (console && console.log) {
    console.log("Sample of data:", data.slice(0, 100));
  }
}); //https://api.publicapis.org/entries
