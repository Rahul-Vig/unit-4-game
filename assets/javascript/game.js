$(document).ready(function() {
  $(".opponents").hide(); //hide opponents by default
  $(".defender-container").hide(); //hide defender by default

  var characterSelected = false; //var to check whether a player has selected a character
  var opponentSelected = false; //var to check whether a player has selected a opponent
  var charObiwan = false;
  var charYoda = false;
  var charDarthMaul = false;
  var charDarthVader = false;
  var oppDeafeated = 0;

  var oppObiwan = false;
  var oppYoda = false;
  var oppDarthVader = false;
  var oppDarthMaul = false;

  var obiwanHealth = 150;
  var yodaHealth = 200;
  var darthMaulHealth = 160;
  var darthVaderHealth = 180;

  var obiWanAttack = 15;
  var yodaAttack = 8;
  var darthMaulAttack = 9;
  var darthVaderAttack = 10;

  var obiWanCounter = 30;
  var yodaCounter = 20;
  var darthMaulCounter = 25;
  var darthVaderCounter = 28;

  //Choosing a character
  $(".c1").on("click", function() {
    //if player clicks on obiwan
    if (characterSelected === false) {
      charObiwan = true;
      console.log("here");
      //and if a character hasn't been selected yet
      $(".c2").hide(); //hide the rest of the characters
      $(".c3").hide();
      $(".c4").hide();

      $(".opponents").show(); //after hiding the rest of the characters besides our chosen character, show possible opponents
      $(".o1").hide(); //hide opponent card that corresponds with self
      $(".o2").show(); //show yoda
      $(".o3").show(); //show darth maul
      $(".o4").show(); // show darth vader
      characterSelected = true; //change val of charSelected to true because we have now chosen a character
    }
  });

  $(".c2").on("click", function() {
    if (characterSelected === false) {
      charYoda = true;
      $(".c1").hide();
      $(".c3").hide();
      $(".c4").hide();

      $(".opponents").show();
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
      charDarthMaul = true;
      $(".c2").hide();
      $(".c1").hide();
      $(".c4").hide();

      $(".opponents").show();
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
      charDarthVader = true;
      $(".c2").hide();
      $(".c3").hide();
      $(".c1").hide();

      $(".opponents").show();
      $(".o4").hide();
      $(".o2").show();
      $(".o3").show();
      $(".o1").show();
      characterSelected = true;
    }
    console.log(characterSelected);
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //choosing an opponent
  $(".o2").on("click", function() {
    if (opponentSelected === false) {
      oppYoda = true;
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

  $(".o1").on("click", function() {
    if (opponentSelected === false) {
      oppObiwan = true;
      $(".o1").hide();
      $(".defender-container").show();
      $(".d2").hide();
      $(".d3").hide();
      $(".d4").hide();
      $(".d1").show();
      opponentSelected = true;
      $(".opponents").hide();
      $("#heading").hide();
    }
  });

  $(".o3").on("click", function() {
    if (opponentSelected === false) {
      oppDarthMaul = true;
      $(".o3").hide();
      $(".defender-container").show();
      $(".d2").hide();
      $(".d1").hide();
      $(".d4").hide();
      $(".d3").show();
      opponentSelected = true;
      $(".opponents").hide();
      $("#heading").hide();
    }
  });

  $(".o4").on("click", function() {
    if (opponentSelected === false) {
      oppDarthVader = true;
      $(".o4").hide();
      $(".defender-container").show();
      $(".d2").hide();
      $(".d1").hide();
      $(".d3").hide();
      $(".d4").show();
      opponentSelected = true;
      $(".opponents").hide();
      $("#heading").hide();
    }
  });

  $("#attack-button").on("click", function() {
    //obiwan vs yoda
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charObiwan === true &&
      oppYoda === true
    ) {
      $("#your-damage").text("You dealt " + obiWanAttack + " damage!");
      $("#opp-damage").text("You took " + yodaCounter + " damage!");
      obiwanHealth -= yodaCounter;
      yodaHealth -= obiWanAttack;
      obiWanAttack += obiWanAttack;
      $("#csObiHealth").text(obiwanHealth);
      $("#dsYodaHealth").text(yodaHealth);
      if (obiwanHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (yodaHealth <= 0 && obiwanHealth > 0) {
        oppDeafeated++;
        oppYoda = false;
        opponentSelected = false;
        $(".d2").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //obiwan vs darth maul
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charObiwan === true &&
      oppDarthMaul === true
    ) {
      $("#your-damage").text("You dealt " + obiWanAttack + " damage!");
      $("#opp-damage").text("You took " + darthMaulCounter + " damage!");
      obiwanHealth -= darthMaulCounter;
      darthMaulHealth -= obiWanAttack;
      obiWanAttack += obiWanAttack;
      $("#csObiHealth").text(obiwanHealth);
      $("#dsDarthMaulHealth").text(darthMaulHealth);
      if (obiwanHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (darthMaulHealth <= 0 && obiwanHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppDarthMaul = false;
        $(".d3").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //obiwan vs darth vader
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charObiwan === true &&
      oppDarthVader === true
    ) {
      $("#your-damage").text("You dealt " + obiWanAttack + " damage!");
      $("#opp-damage").text("You took " + darthVaderCounter + " damage!");
      obiwanHealth -= darthVaderCounter;
      darthVaderHealth -= obiWanAttack;
      obiWanAttack += obiWanAttack;
      $("#csObiHealth").text(obiwanHealth);
      $("#dsDarthVaderHealth").text(darthVaderHealth);
      if (obiwanHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (darthVaderHealth <= 0 && obiwanHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppDarthMaul = false;
        $(".d4").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //yoda vs obiwan
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charYoda === true &&
      oppObiwan === true
    ) {
      $("#your-damage").text("You dealt " + yodaAttack + " damage!");
      $("#opp-damage").text("You took " + obiWanCounter + " damage!");
      yodaHealth -= obiWanCounter;
      obiwanHealth -= yodaAttack;
      yodaAttack += yodaAttack;
      $("#csYodaHealth").text(yodaHealth);
      $("#dsObiHealth").text(obiwanHealth);
      if (yodaHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (obiwanHealth <= 0 && yodaHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppObiwan = false;
        $(".d1").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //yoda vs darth maul
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charYoda === true &&
      oppDarthMaul === true
    ) {
      $("#your-damage").text("You dealt " + yodaAttack + " damage!");
      $("#opp-damage").text("You took " + darthMaulCounter + " damage!");
      yodaHealth -= darthMaulCounter;
      darthMaulHealth -= yodaAttack;
      yodaAttack += yodaAttack;
      $("#csYodaHealth").text(yodaHealth);
      $("#dsDarthMaulHealth").text(darthMaulHealth);
      if (yodaHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (darthMaulHealth <= 0 && yodaHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppDarthMaul = false;
        $(".d3").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //yoda vs darth vader
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charYoda === true &&
      oppDarthVader === true
    ) {
      $("#your-damage").text("You dealt " + yodaAttack + " damage!");
      $("#opp-damage").text("You took " + darthVaderCounter + " damage!");
      yodaHealth -= darthVaderCounter;
      darthVaderHealth -= yodaAttack;
      yodaAttack += yodaAttack;
      $("#csYodaHealth").text(yodaHealth);
      $("#dsDarthVaderHealth").text(darthVaderHealth);
      if (yodaHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (darthVaderHealth <= 0 && yodaHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppDarthVader = false;
        $(".d4").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //darth maul vs obiwan
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charDarthMaul === true &&
      oppObiwan === true
    ) {
      $("#your-damage").text("You dealt " + darthMaulAttack + " damage!");
      $("#opp-damage").text("You took " + obiWanCounter + " damage!");
      darthMaulHealth -= obiWanCounter;
      obiwanHealth -= darthMaulAttack;
      darthMaulAttack += darthMaulAttack;
      $("#csDarthMaulHealth").text(darthMaulHealth);
      $("#dsObiHealth").text(obiwanHealth);
      if (darthMaulHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (obiwanHealth <= 0 && darthMaulHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppObiwan = false;
        $(".d1").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //darth maul vs yoda
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charDarthMaul === true &&
      oppYoda === true
    ) {
      $("#your-damage").text("You dealt " + darthMaulAttack + " damage!");
      $("#opp-damage").text("You took " + yodaCounter + " damage!");
      darthMaulHealth -= yodaCounter;
      yodaHealth -= darthMaulAttack;
      darthMaulAttack += darthMaulAttack;
      $("#csDarthMaulHealth").text(darthMaulHealth);
      $("#dsYodaHealth").text(yodaHealth);
      if (darthMaulHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (yodaHealth <= 0 && darthMaulHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppYoda = false;
        $(".d2").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //darth maul vs darth vader
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charDarthMaul === true &&
      oppDarthVader === true
    ) {
      $("#your-damage").text("You dealt " + darthMaulAttack + " damage!");
      $("#opp-damage").text("You took " + darthVaderCounter + " damage!");
      darthMaulHealth -= darthVaderCounter;
      darthVaderHealth -= darthMaulAttack;
      darthMaulAttack += darthMaulAttack;
      $("#csDarthMaulHealth").text(darthMaulHealth);
      $("#dsDarthVaderHealth").text(darthVaderHealth);
      if (darthMaulHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (darthVaderHealth <= 0 && darthMaulHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppDarthVader = false;
        $(".d4").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //darth vader vs obiwan
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charDarthVader === true &&
      oppObiwan === true
    ) {
      $("#your-damage").text("You dealt " + darthVaderAttack + " damage!");
      $("#opp-damage").text("You took " + obiWanCounter + " damage!");
      darthVaderHealth -= obiWanCounter;
      obiwanHealth -= darthVaderAttack;
      darthVaderAttack += darthVaderAttack;
      $("#csDarthVaderHealth").text(darthVaderHealth);
      $("#dsObiHealth").text(obiwanHealth);
      if (darthVaderHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (obiwanHealth <= 0 && darthVaderHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppObiwan = false;
        $(".d1").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //darth vader vs yoda
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charDarthVader === true &&
      oppYoda === true
    ) {
      $("#your-damage").text("You dealt " + darthVaderAttack + " damage!");
      $("#opp-damage").text("You took " + yodaCounter + " damage!");
      darthVaderHealth -= yodaCounter;
      yodaHealth -= darthVaderAttack;
      darthVaderAttack += darthVaderAttack;
      $("#csDarthVaderHealth").text(darthVaderHealth);
      $("#dsYodaHealth").text(yodaHealth);
      if (darthVaderHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (yodaHealth <= 0 && darthVaderHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppYoda = false;
        $(".d2").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }

    //darth vader vs darth maul
    if (
      opponentSelected === true &&
      characterSelected === true &&
      charDarthVader === true &&
      oppDarthMaul === true
    ) {
      $("#your-damage").text("You dealt " + darthVaderAttack + " damage!");
      $("#opp-damage").text("You took " + darthMaulCounter + " damage!");
      darthVaderHealth -= darthMaulCounter;
      darthMaulHealth -= darthVaderAttack;
      darthVaderAttack += darthVaderAttack;
      $("#csDarthVaderHealth").text(darthVaderHealth);
      $("#dsDarthMaulHealth").text(darthMaulHealth);
      if (darthVaderHealth <= 0) {
        alert("You Lose!");
        reset();
      }

      if (darthMaulHealth <= 0 && darthVaderHealth > 0) {
        oppDeafeated++;
        opponentSelected = false;
        oppDarthMaul = false;
        $(".d4").hide();
        $(".opponents").show();
        $("#your-damage").text("");
        $("#opp-damage").text("");
        if (oppDeafeated === 3) {
          reset();
        }
        return;
      }
    }
  });

  function reset() {
    $(".opponents").hide();
    $(".defender-container").hide();
    characterSelected = false; //var to check whether a player has selected a character
    opponentSelected = false; //var to check whether a player has selected a opponent
    charObiwan = false;
    charYoda = false;
    charDarthMaul = false;
    charDarthVader = false;
    oppDeafeated = 0;

    oppObiwan = false;
    oppYoda = false;
    oppDarthVader = false;
    oppDarthMaul = false;

    obiwanHealth = 150;
    yodaHealth = 200;
    darthMaulHealth = 160;
    darthVaderHealth = 180;

    obiWanAttack = 15;
    yodaAttack = 8;
    darthMaulAttack = 9;
    darthVaderAttack = 10;

    obiWanCounter = 30;
    yodaCounter = 20;
    darthMaulCounter = 25;
    darthVaderCounter = 28;
    $("#csObiHealth").text(obiwanHealth);
    $("#csYodaHealth").text(yodaHealth);
    $("#csDarthMaulHealth").text(darthMaulHealth);
    $("#csDarthVaderHealth").text(darthVaderHealth);
    $("#dsObiHealth").text(obiwanHealth);
    $("#dsYodaHealth").text(yodaHealth);
    $("#dsDarthMaulHealth").text(darthMaulHealth);
    $("#dsDarthVaderHealth").text(darthVaderHealth);
    $("#your-damage").text("");
    $("#opp-damage").text("");
    $(".c1").show();
    $(".c2").show();
    $(".c3").show();
    $(".c4").show();
    console.log(characterSelected);
  }
});
