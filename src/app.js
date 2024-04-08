const smsbox = document.querySelector("#smsbox");
const formsub = document.querySelector("#NumberOrEmailForm");
const right = document.querySelector("#right");
const left = document.querySelector("#left");
const phoneNumber = document.querySelector(".verifingNumber");
const inputPhone = document.querySelector("#inputphone");

/*  submit  */
formsub.addEventListener("submit", (e) => {
  e.preventDefault();
  smsbox.classList.remove("hidden");
  smsbox.classList.add("flex");
  right.classList.add("hidden");
  left.className = "hidden";
  const phoneVar = inputPhone.value;
  phoneNumber.innerHTML = phoneVar;
});

/*  Timer */
var fullTime = 100;
const progress = document.querySelector("#progress");
function countdown() {
  var min = 1;
  var seconds = 40;
  function tick() {
    var counter = document.getElementById("counter");
    seconds--;
    progress.style = `width: ${fullTime--}%`;
    counter.innerHTML =
      (min < 2 ? "0" : "") +
      String(min) +
      ":" +
      (seconds < 10 ? "0" : "") +
      String(seconds);
    if (seconds === 0 && min != 0) {
      min--;
      seconds = 59;
      counter.innerHTML =
        (min < 2 ? "0" : "") +
        String(min) +
        ":" +
        (seconds < 10 ? "0" : "") +
        String(seconds);
    }
    if (seconds > 0) {
      setTimeout(tick, 1000);
    }
  }
  tick();
}
countdown();
