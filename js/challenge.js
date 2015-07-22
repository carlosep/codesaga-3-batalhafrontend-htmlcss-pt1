$(document).ready(function() {
  $('#solution').load(function() {
    var title = $("#solution").contents().find("title").text();
    console.log(title);
    var h1 = $("#solution").contents().find("h1").text();
    console.log(h1);
    var p = $("#solution").contents().find("p").text();
    console.log(p);
    var errors = new Array();

    if (strcmp("Meu Currículo", title) != 0) {
      errors.push("The tag \'title\' is missing or wrong.")
    } 
    
    if (h1.length == 0) {
      errors.push("The tag 'h1' is missing or empty.")
    }
    if (p.length == 0) {
      errors.push("You must write at least one paragraph.")
    }
    var result = $("#result");
    if (errors.length == 0){
      result.addClass("alert-success");
      result.append("Success. You are ready to the next challenge.")
    }
    else {
      result.addClass("alert-danger");
      result.append("Ops... You still have " + errors.length + " errors:<br>");
      result.append(errors.join("<br>"));
    }
  });
});

function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}