// Author: Chad Wilson
var numbers = [1, 10, 200];

  function textBoxOne() {
    var ans1 = document.getElementById("answer1");
    if(ans1.value != "") {
      document.getElementById("incorrectans1").style.display = "none";
      document.getElementById("correctans1").style.display = "inline-block";
      document.getElementById("correctans1").innerHTML = "You submitted your answer.";
      ans1.style.backgroundColor = "lightgreen";
      setCookie("answer1", ans1.value, 1);
    }
    else {
      document.getElementById("correctans1").style.display = "none";
      document.getElementById("incorrectans1").style.display = "inline-block";
      document.getElementById("incorrectans1").innerHTML = "You must enter a value.";
      ans1.style.backgroundColor = "rgb(254, 65, 65)";
      setCookie("answer1", ans1.value, 1);
    }
  }

  function textBoxTwo() {
    var ans2 = document.getElementById("answer2");
    if(ans2.value != "") {
      document.getElementById("incorrectans2").style.display = "none";
      document.getElementById("correctans2").style.display = "inline-block";
      document.getElementById("correctans2").innerHTML = "You submitted your answer.";
      ans2.style.backgroundColor = "lightgreen";
      setCookie("answer2", ans2.value, 1);
    }
    else {
      document.getElementById("correctans2").style.display = "none";
      document.getElementById("incorrectans2").style.display = "inline-block";
      document.getElementById("incorrectans2").innerHTML = "You must enter a value.";
      ans2.style.backgroundColor = "rgb(254, 65, 65)";
      setCookie("answer2", ans2.value, 1);
    }
  }

  function randomNumberGenerator1() {
    var comp_num = Math.floor((Math.random() * 10) + 1);
    return comp_num;
  }

  function randomNumberGenerator2() {
    var comp_num = Math.floor((Math.random() * 200) + 1);
    console.log(comp_num);
    return comp_num;
  }

  function FirstGame() {
    var comp_num = randomNumberGenerator1();
    while(answer != comp_num)  {
      var answer = prompt("Guess a number between " + numbers[0] + " and " + numbers[1]);
      if(answer < comp_num) {
        alert("Nope, my number is higher");
      }
      else if(answer > comp_num) {
        alert("Nope, my number is lower");
      }
    }
    alert("Correct!");
  }

  function SecondGame() {
    var comp_num = randomNumberGenerator2();
    while(answer != comp_num) {
      var answer = prompt("Guess a number between " + numbers[0] + " and " + numbers[2]);
      if(answer < comp_num) {
        alert("Nope, my number is higher");
      }
      else if(answer > comp_num) {
        alert("Nope, my number is lower");
      }
    }
    alert("Correct!");
  }

  function printFirstAnswer() {
    var answer1 = document.getElementById("answer1p");
    var cookie1 = getCookie("answer1");
    if(cookie1 != "") {
      answer1.innerHTML = cookie1;
    }
    else {
      answer1.innerHTML = "You did not submit an answer";
    }
  }

  function printSecondAnswer() {
    var answer2 = document.getElementById("answer2p");
    var cookie2 = getCookie("answer2");
    if(cookie2 != "") {
      answer2.innerHTML = cookie2;
    }
    else {
      answer2.innerHTML = "You did not submit an answer";
    }
  }

  //setCookie and getCookie are courtesy of w3schools
  //https://www.w3schools.com/js/js_cookies.asp
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
