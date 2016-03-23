$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var quality = $("#quality").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var color = $("#color").val();

    $("#colorOutput").text(color);
    $("#qualityOutput").text(quality);
    $("#flavorOutput").text(flavor);
    event.preventDefault();
  });
});
