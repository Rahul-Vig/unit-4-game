$(document).ready(function() {
  $(".opponent-container").hide(); //hide opponents by default
  $(".defender-container").hide(); //hide defender by default

  var characterSelected = false; //var to check whether a player has selected a character
  var opponentSelected = false; //var to check whether a player has selected a opponent

  //Choosing a character
  $(".c1").on("click", function() {
    //if player clicks on obiwan
    if (characterSelected === false) {
      //and if a character hasn't been selected yet
      $(".c2").hide(); //hide the rest of the characters
      $(".c3").hide();
      $(".c4").hide();

      $(".opponent-container").show(); //after hiding the rest of the characters besides our chosen character, show possible opponents
      $(".o1").hide(); //hide opponent card that corresponds with self
      $(".o2").show(); //show yoda
      $(".o3").show(); //show darth maul
      $(".o4").show(); // show darth vader
      characterSelected = true; //change val of charSelected to true because we have now chosen a character
    }
    console.log(characterSelected);
  });

  $(".c2").on("click", function() {
    if (characterSelected === false) {
      $(".c1").hide();
      $(".c3").hide();
      $(".c4").hide();

      $(".opponent-container").show();
      $(".o2").hide();
      $(".o1").show();
      $(".o3").show();
      $(".o4").show();
      characterSelected = true;
    }
    console.log(characterSelected);
  });

  $(".c3").on("click", function() {
    if (characterSelected === false) {
      $(".c2").hide();
      $(".c1").hide();
      $(".c4").hide();

      $(".opponent-container").show();
      $(".o3").hide();
      $(".o2").show();
      $(".o1").show();
      $(".o4").show();
      characterSelected = true;
    }
    console.log(characterSelected);
  });

  $(".c4").on("click", function() {
    if (characterSelected === false) {
      $(".c2").hide();
      $(".c3").hide();
      $(".c1").hide();

      $(".opponent-container").show();
      $(".o4").hide();
      $(".o2").show();
      $(".o3").show();
      $(".o1").show();
      characterSelected = true;
    }
    console.log(characterSelected);
  });

  //choosing an opponent
  $(".o2").on("click", function() {
    if (opponentSelected === false) {
      $(".o2").hide();
      $(".defender-container").show();
      $(".d1").hide();
      $(".d3").hide();
      $(".d4").hide();
      $(".d2").show();
      opponentSelected = true;
      $(".opponents").hide();
      $("#heading").hide();
    }
  });

  $(".o2").on("click", function() {
    if (opponentSelected === false) {
      $(".o2").hide();
      $(".defender-container").show();
      $(".d1").hide();
      $(".d3").hide();
      $(".d4").hide();
      $(".d2").show();
      opponentSelected = true;
    }
  });
});
