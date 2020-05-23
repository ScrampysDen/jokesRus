// first card
document.getElementById('zone').addEventListener('mouseenter', run);
function run(e) {

  var x = 0;
  var txt = 'her breasts give spoiled milk.';
  var speed = 100;
  function runOptOne() {
    if (x < txt.length) {
      document.getElementById("message-box").innerHTML += txt.charAt(x);
      x++;
      setTimeout(runOptOne, speed);
    }
  }

  runOptOne();

  // e.preventDefault();
};
// remove content
document.getElementById('backzone').addEventListener('mouseout', clear);
function clear(e) {
  var msgBox = document.getElementById('message-box');
  msgBox.innerHTML = " ";
  e.preventDefault();
};


// second card
document.getElementById('zoneTwo').addEventListener('mouseenter', runTwo);
function runTwo(e) {

  var y = 0;
  var speedTwo = 100;
  var txtTwo = "when she walked in front of the TV, I missed three episodes";
  function runOptTwo() {
    if (y < txtTwo.length) {
      document.getElementById('message-box-2').innerHTML += txtTwo.charAt(y);
      y++;
      setTimeout(runOptTwo, speedTwo);
    }
  }
  runOptTwo();
  e.preventDefault();
};
// remove content
document.getElementById('backzoneTwo').addEventListener('mouseleave', clearTwo);
function clearTwo(e) {

  var msgBox2 = document.getElementById('message-box-2');
  msgBox2.innerHTML = " ";
  e.preventDefault();
};


// third card
document.getElementById('zoneThr').addEventListener('mouseenter', runThr);
function runThr(e) {

  var z = 0;
  var speedThree = 100;
  var txtThree = "lets leave moms out if this and I'll leave this out of your mom.. AYOO!!!";
  function runOptThree() {
    if (z < txtThree.length)
      document.getElementById('message-box-3').innerHTML += txtThree.charAt(z);
    z++;
    setTimeout(runOptThree, speedThree);
  }
  runOptThree();
  e.preventDefault();
}
// remove content
document.getElementById('backzoneThr').addEventListener('mouseleave', clearThr);
function clearThr(e) {

  var msgBox3 = document.getElementById('message-box-3');
  msgBox3.innerHTML = " ";
  e.preventDefault()
}


// fourth card
document.getElementById('zoneFr').addEventListener('mouseenter', runFr);
function runFr(e) {

  var dd = 0;
  var speedFour = 100;
  var txtFour = "her bellybutton gets home 15 minutes before she does."

  function runOptFour() {
    if (dd < txtFour.length) {
      document.getElementById("message-box-4").innerHTML += txtFour.charAt(dd);
      dd++;
      setTimeout(runOptFour, speedFour);
    }
  }
  runOptFour();
  e.preventDefault();
}
// remove content
document.getElementById("backzoneFr").addEventListener('mouseleave', clearFour);
function clearFour(e) {
  var msgBox4 = document.getElementById('message-box-4');
  msgBox4.innerHTML = " ";
  e.preventDefault();
}


// fifth card
document.getElementById('zoneFv').addEventListener('mouseenter', runFv);
function runFv(e) {

  var ee = 0;
  var speedFive = 100;
  var txtFive = "when she went into a haunted house she came out with a job application.";
  function runOptFive() {
    if (ee < txtFive.length) {
      document.getElementById('message-box-5').innerHTML += txtFive.charAt(ee);
      ee++;
      setTimeout(runOptFive, speedFive);
    };
  };
  runOptFive();
  e.preventDefault();
}
// remove content
document.getElementById('backzoneFv').addEventListener('mouseleave', clearFive);
function clearFive(e) {
  var msgBox5 = document.getElementById('message-box-5');
  msgBox5.innerHTML = " ";
  e.preventDefault();
}