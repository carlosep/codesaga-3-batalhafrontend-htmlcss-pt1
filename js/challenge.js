$(document).ready(function() {
  $('#solution').load(function() {
    var title = $("#solution").contents().find("title").text();
    var h1 = $("#solution").contents().find("h1").text();
    var p = $("#solution").contents().find("p").text();
    var errors = new Array();

    verify(strcmp("Meu Currículo", title), "The tag \'title\' is missing or wrong.", errors);
    verify(h1.length == 0, "The tag 'h1' is missing or empty.", errors);
    verify(p.length == 0, "You must write at least one paragraph.", errors);

    var result = $("#result");
    if (errors.length == 0){
      result.addClass("alert-success");
      result.append("Success. You are ready to the next challenge.");
    }
    else {
      result.addClass("alert-danger");
      result.append("Ops... You still have " + errors.length + " errors:<br>");
      result.append(errors.join("<br>"));
    }
  });
});

function verify(expr, message, errors) {
  if(expr) {
    errors.push(message);
  }
}

function strcmp(a, b) {
  return (a<b?-1:(a>b?1:0));
}
