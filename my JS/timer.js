const startButton = document.getElementById("start");
const audio = new Audio("audio.wav");
function myTimer(duration) {
  const buttonBreak = document.getElementById("buttonBreak");
  var timer = duration * 60;
  var inter = setInterval(function () {
    var min = parseInt(timer / 60, 10);
    var sec = parseInt(timer % 60, 10);

    min += " min";
    sec += " sec";

    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;

    if (--timer < 0) {
      timer = duration * 60;
    }

    if (min == "0 min" && sec == "0 sec") {
      clearInterval(inter);
      audio.play();
      if (butttonBreak.innerText == "Break") {
        myTimer(rest);
        butttonBreak.innerText = "Study";
      } else if (butttonBreak.innerText == "Study") {
        myTimer(study);
      }
    }

    buttonBreak.addEventListener("click", () => {
      clearInterval(inter);
      audio.pause();
      audio.currentTime = 0;
    });
  }, 1000);
}

// const myTimerStudy = setInterval(myTimer(study), 1000);
// const myTimerBreak = setInterval(myTimer(rest), 1000);

// butttonBreak.addEventListener("click", () => {
//   if (butttonBreak.innerText == "Break") {
//     clearInterval(myTimer);
//     myTimer(rest);
//     butttonBreak.innerText = "Study";
//   } else if (butttonBreak.innerText === "Study") {
//     clearInterval(interval);
//     myTimer(study);
//   }
// });

const butttonBreak = document.getElementById("buttonBreak");

butttonBreak.addEventListener("click", () => {
  const study = parseInt(document.getElementById("study").value);
  const rest = parseInt(document.getElementById("break").value);
  if (butttonBreak.innerText == "Break") {
    myTimer(rest);
    butttonBreak.innerText = "Study";
  } else if (butttonBreak.innerText == "Study") {
    myTimer(study);
  }
});

startButton.addEventListener("click", function () {
  var div = startButton.parentNode;
  if (!div.classList.contains("hidden")) {
    if (
      document.getElementById("study").value &&
      document.getElementById("break").value
    ) {
      div.classList.add("hidden");
      myTimer(document.getElementById("study").value);
    }
  }
});
