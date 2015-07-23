$(document).ready(function() {
  $('#solution').load(function() {
    var title = getText("title");
    var h1 = getText("h1");
    var p = getText("p");
    var errors = new Array();

    verify(strcmp("Meu Currículo", title), "The \'title\' should be \'Meu Currículo\'.", errors);
    verify(h1.length == 0, "The tag 'h1' is missing or empty.", errors);
    verify(p.length == 0, "You must write at least one paragraph.", errors);

    showMessage(errors);

  });
});
