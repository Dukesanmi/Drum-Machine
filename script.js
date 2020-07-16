/*Necessary Global Variables*/
var drumPads = document.querySelectorAll(".drum-pad");
var iconS = document.querySelectorAll(".icons");
var audioSound = document.querySelectorAll(".clip");
var bank = initialBank();
var power = false;

/*Play Beat By Clicking on Drumpad*/
/*Remember to refactor to a single function later*/
function playBeat1() {
  document.getElementById("Q").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Heater 1";
  } else {
    document.getElementById("sound-type").innerHTML = "Punchy Kick";
  }
}

function playBeat2() {
  document.getElementById("W").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Heater 2";
  } else {
    document.getElementById("sound-type").innerHTML = "Side Stick";
  }
}

function playBeat3() {
  document.getElementById("E").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Heater 3";
  } else {
    document.getElementById("sound-type").innerHTML = "Snare";
  }
}

function playBeat4() {
  document.getElementById("A").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Heater 4";
  } else {
    document.getElementById("sound-type").innerHTML = "Closed HH";
  }
}

function playBeat5() {
  document.getElementById("S").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Clap";
  } else {
    document.getElementById("sound-type").innerHTML = "Open HH";
  }
}

function playBeat6() {
  document.getElementById("D").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Open HH";
  } else {
    document.getElementById("sound-type").innerHTML = "Shaker";
  }
}

function playBeat7() {
  document.getElementById("Z").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Closed HH";
  } else {
    document.getElementById("sound-type").innerHTML = "Chord 1";
  }
}

function playBeat8() {
  document.getElementById("X").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Kick";
  } else {
    document.getElementById("sound-type").innerHTML = "Chord 2";
  }
}

function playBeat9() {
  document.getElementById("C").play();

  if (bank === false) {
    document.getElementById("sound-type").innerHTML = "Kick 'n' Hat";
  } else {
    document.getElementById("sound-type").innerHTML = "Chord 3";
  }
}

/*Play Beat By Pressing Drumpad Key*/

document.addEventListener("keypress", playBeatBykey);
function playBeatBykey(event) {
  var key = event.keyCode;
  var char = String.fromCharCode(key);
  var charUp = char.toUpperCase();

  if (char === "q" || charUp === "Q") {
    document.getElementById("Q").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Heater 1";
    } else {
      document.getElementById("sound-type").innerHTML = "Punchy Kick";
    }
  } else if (char === "w" || charUp === "W") {
    document.getElementById("W").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Heater 2";
    } else {
      document.getElementById("sound-type").innerHTML = "Side Stick";
    }
  } else if (char === "e" || charUp === "E") {
    document.getElementById("E").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Heater 3";
    } else {
      document.getElementById("sound-type").innerHTML = "Snare";
    }
  } else if (char === "a" || charUp === "A") {
    document.getElementById("A").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Heater 4";
    } else {
      document.getElementById("sound-type").innerHTML = "Closed HH";
    }
  } else if (char === "s" || charUp === "S") {
    document.getElementById("S").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Heater 6";
    } else {
      document.getElementById("sound-type").innerHTML = "Open HH";
    }
  } else if (char === "d" || charUp === "D") {
    document.getElementById("D").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Open HH";
    } else {
      document.getElementById("sound-type").innerHTML = "Shaker";
    }
  } else if (char === "z" || charUp === "Z") {
    document.getElementById("Z").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Closed HH";
    } else {
      document.getElementById("sound-type").innerHTML = "Chord 1";
    }
  } else if (char === "x" || charUp === "X") {
    document.getElementById("X").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Kick";
    } else {
      document.getElementById("sound-type").innerHTML = "Chord 2";
    }
  } else if (char === "c" || charUp === "C") {
    document.getElementById("C").play();

    if (bank === false) {
      document.getElementById("sound-type").innerHTML = "Kick 'n' Hat";
    } else {
      document.getElementById("sound-type").innerHTML = "Chord 3";
    }
  }
}

/*Volume Change*/
function volumeChange(value) {
  document.getElementById("sound-type").innerHTML = "Volume " + value;
  document.getElementById("start-sound").volume = value / 100;
  for (var i = 0; i < audioSound.length; i++) {
    audioSound[i].volume = value / 100;
  }
}

/*Power button toggle*/
/*Default state*/
if (power === false) {
  document.getElementById("sound-type").innerHTML = "Sound";
  document.getElementById("sound-type").style.padding = "0.5em 1em";
  document.getElementById("volume-toggler").style.cssText =
    "opacity: 0; position: absolute;";
  document.getElementById("kit-type-btn").style.cssText =
    "position: absolute; opacity: 0;";

  for (var j = 0; j < audioSound.length; j++) {
    audioSound[j].muted = true;
  }
}

/*Power state toggle*/
function powerOff() {
  power = !power;
  //console.log(power);

  if (power === false) {
    document.getElementById("start-sound").muted = true;
    document.getElementById("kit-type-btn").style.cssText =
      "opacity: 0; position: absolute;";
    document.getElementById("volume-toggler").style.cssText =
      "opacity: 0; position: absolute;";
    console.log("bank " + bank);
    document.getElementById("power-symbol").style.color = "#555";
    document.getElementById("sound-type").innerHTML = "Sound";
    document.getElementById("sound-type").style.padding = "0.5em 0.8em";
    document.getElementById("sound-type").style.backgroundColor =
      "rgba(192, 192, 192, 0.8)";
    document.getElementById("header-text").style.cssText =
      "color: rgba(192, 192, 192, 1); transition: color 0.1s linear";
    document.getElementById("power-txt").style.cssText =
      "color: rgb(255, 255, 255); transition: color 0.1s linear";
    document.getElementById("bank").style.cssText =
      "color: rgb(255, 255, 255); transition: color 0.1s linear";

    for (var k = 0; k < drumPads.length; k++) {
      drumPads[k].style.cssText =
        "color: rgba(192, 192, 192, 0.5); transition: color 0.1s linear; transition: box-shadow 0.1s linear; box-shadow: 0 15px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);";
    }

    for (var l = 0; l < iconS.length; l++) {
      iconS[l].style.cssText =
        "fill: rgba(192, 192, 192, 0.5); transition: fill 0.1s linear";
    }

    for (var m = 0; m < audioSound.length; m++) {
      audioSound[m].muted = true;
    }
  } else if (power === true && bank === false) {
    document.getElementById("start-sound").muted = false;
    document.getElementById("start-sound").play();
    document.getElementById("kit-type-btn").style.cssText =
      "position: static; opacity: 1; transition: opacity 1s ease-in";
    document.getElementById("volume-toggler").style.cssText =
      "position: static; opacity: 1; transition: opacity 1s ease-in";
    document.getElementById("power-symbol").style.color = "rgba(3, 252, 23, 1)";
    document.getElementById("sound-type").style.backgroundColor = "#7ef757";
    document.getElementById("header-text").style.cssText =
      "color: rgba(3, 252, 23, 1); transition: color 0.8s linear";
    document.getElementById("power-txt").style.cssText =
      "color: rgba(3, 252, 23, 1); transition: color 0.8s linear";
    document.getElementById("bank").style.cssText =
      "color: rgba(3, 252, 23, 1); transition: color 0.8s linear";

    for (var n = 0; n < drumPads.length; n++) {
      drumPads[n].style.cssText =
        "color: rgba(3, 252, 23, 1); transition: color 0.8s linear; transition: box-shadow 2s linear; box-shadow: 0 5px 10px rgba(3, 252, 23, 0.19), 0 3px 3px rgba(3, 252, 23, 0.23);";
    }

    for (var g = 0; g < iconS.length; g++) {
      iconS[g].style.cssText =
        "fill: rgba(3, 252, 23, 1); transition: fill 0.8s linear";
    }

    for (var h = 0; h < audioSound.length; h++) {
      audioSound[h].muted = false;
    }
  } else if (power === true && bank === true) {
    document.getElementById("start-sound").muted = false;
    document.getElementById("start-sound").play();
    document.getElementById("kit-type-btn").style.cssText =
      "position: static; opacity: 1; transition: opacity 1s ease-in";
    document.getElementById("volume-toggler").style.cssText =
      "position: static; opacity: 1; transition: opacity 1s ease-in";
    document.getElementById("power-symbol").style.color =
      "rgba(0, 166, 255, 1)";
    document.getElementById("sound-type").style.backgroundColor = "#91d9fa";
    document.getElementById("header-text").style.cssText =
      "color: rgba(0, 166, 255, 1); transition: color 0.8s linear";
    document.getElementById("power-txt").style.cssText =
      "color: rgba(0, 166, 255, 1); transition: color 0.8s linear";
    document.getElementById("bank").style.cssText =
      "color: rgba(0, 166, 255, 1); transition: color 0.8s linear";

    for (var o = 0; o < drumPads.length; o++) {
      drumPads[o].style.cssText =
        "color: rgba(0, 166, 255, 1); transition: color 0.8s linear; transition: box-shadow 3s linear; box-shadow: 0 5px 10px rgba(0, 166, 255, 0.19), 0 3px 3px rgba(0, 166, 255, 0.23);";
    }

    for (var p = 0; p < iconS.length; p++) {
      iconS[p].style.cssText =
        "fill: rgba(0, 166, 255, 1); transition: fill 0.8s linear";
    }

    for (var q = 0; q < audioSound.length; q++) {
      audioSound[q].autoplay = false;
    }
    for (var r = 0; r < audioSound.length; r++) {
      audioSound[r].muted = false;
    }
  }
}

/*Kit Bank*/
function initialBank() {
  const ReturningUser = "bank1-false | bank2-true" in localStorage;
  const savedMode = JSON.parse(
    localStorage.getItem("bank1-false | bank2-true")
  );
  if (savedMode === true) {
    document.getElementById("checkboxBank").checked = true;
    document.getElementById("bank").innerHTML = "Bank 2";
    document.getElementById("Q").src =
      "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3";
    document.getElementById("W").src =
      "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
    document.getElementById("E").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3";
    document.getElementById("A").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
    document.getElementById("S").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3";
    document.getElementById("D").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
    document.getElementById("Z").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3";
    document.getElementById("X").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3";
    document.getElementById("C").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3";
  } else {
    document.getElementById("checkboxBank").checked = false;
    document.getElementById("bank").innerHTML = "Bank 1";
  }

  //console.log('Is it ReturningUser: ' + ReturningUser);
  //console.log('What mode is saved (n: bank1-false | bank2-true): ' + savedMode);

  if (ReturningUser) {
    return savedMode;
  } else {
    return false;
  }
}
//console.log('initial Bank value ='+ initialBank());

/*Change bank kit*/
function bankChange() {
  bank = !bank;
  localStorage.setItem("bank1-false | bank2-true", JSON.stringify(bank));
  //console.log('Bank value after change ='+ initialBank());

  if (bank === true) {
    document.getElementById("bank").innerHTML = "Bank 2";
    document.getElementById("Q").src =
      "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3";
    document.getElementById("W").src =
      "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
    document.getElementById("E").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3";
    document.getElementById("A").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
    document.getElementById("S").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3";
    document.getElementById("D").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
    document.getElementById("Z").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3";
    document.getElementById("X").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3";
    document.getElementById("C").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3";

    document.getElementById("power-symbol").style.color =
      "rgba(0, 166, 255, 1)";
    document.getElementById("sound-type").style.backgroundColor = "#91d9fa";
    document.getElementById("header-text").style.cssText =
      "color: rgba(0, 166, 255, 1); transition: color 0.3s linear";
    document.getElementById("power-txt").style.cssText =
      "color: rgba(0, 166, 255, 1); transition: color 0.3s linear";
    document.getElementById("bank").style.cssText =
      "color: rgba(0, 166, 255, 1); transition: color 0.3s linear";

    for (var a = 0; a < drumPads.length; a++) {
      drumPads[a].style.cssText =
        "color: rgba(0, 166, 255, 1); transition: color 0.3s linear; transition: box-shadow 0.3s linear; box-shadow: 0 5px 10px rgba(0, 166, 255, 0.19), 0 3px 3px rgba(0, 166, 255, 0.23);";
    }

    for (var b = 0; b < iconS.length; b++) {
      iconS[b].style.cssText =
        "fill: rgba(0, 166, 255, 1); transition: fill 0.3s linear";
    }

    for (var c = 0; c < audioSound.length; c++) {
      audioSound[c].autoplay = false;
    }
  } else {
    document.getElementById("bank").innerHTML = "Bank 1";
    document.getElementById("Q").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
    document.getElementById("W").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
    document.getElementById("E").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
    document.getElementById("A").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
    document.getElementById("S").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
    document.getElementById("D").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
    document.getElementById("Z").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
    document.getElementById("X").src =
      "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
    document.getElementById("C").src =
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";

    document.getElementById("power-symbol").style.color = "rgba(3, 252, 23, 1)";
    document.getElementById("sound-type").style.backgroundColor = "#7ef757";
    document.getElementById("header-text").style.cssText =
      "color: rgba(3, 252, 23, 1); transition: color 0.3s linear";
    document.getElementById("power-txt").style.cssText =
      "color: rgba(3, 252, 23, 1); transition: color 0.3s linear";
    document.getElementById("bank").style.cssText =
      "color: rgba(3, 252, 23, 1); transition: color 0.3s linear";

    for (var d = 0; d < drumPads.length; d++) {
      drumPads[d].style.cssText =
        "color: rgba(3, 252, 23, 1); transition: color 0.3s linear; transition: box-shadow 0.3s linear; box-shadow: 0 5px 10px rgba(3, 252, 23, 0.19), 0 3px 3px rgba(3, 252, 23, 0.23);";
    }

    for (var e = 0; e < iconS.length; e++) {
      iconS[e].style.cssText =
        "fill: rgba(3, 252, 23, 1); transition: fill 0.3s linear";
    }

    for (var f = 0; f < audioSound.length; f++) {
      audioSound[f].muted = false;
    }
  }
}

