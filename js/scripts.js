$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var phoneInput = $("input#phone").val();
    var relationshipInput = $("input#relationship").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".phone").text(addressInput);
    $(".relationship").text(relationshipInput);
    $(".contact").append( "<div class='well'>" + "<h1>" + nameInput + "</h1>" + "<br>" + addressInput + "<br>" + phoneInput +  "<br>" + relationshipInput + "</div>" );


  });
});
