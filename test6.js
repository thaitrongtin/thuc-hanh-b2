var url = "http://localhost:8080/api/v1/users";

var data = {};
data.firstname = "Trong Tin";
data.lastname = "Thai";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url + "/12", true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(json);