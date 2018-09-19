var buttonone = document.getElementById("ButtonOne");
buttonone.addEventListener('click', function() {
  if (buttonone.getAttribute("data-text-swap") == buttonone.innerHTML) {
    buttonone.innerHTML = buttonone.getAttribute("data-text-original");
  } else {
    buttonone.setAttribute("data-text-original", buttonone.innerHTML);
    buttonone.innerHTML = buttonone.getAttribute("data-text-swap");
  }
}, false);

var buttontwo = document.getElementById("ButtonTwo");
buttontwo.addEventListener('click', function() {
  if (buttontwo.getAttribute("data-text-swap") == buttontwo.innerHTML) {
    buttontwo.innerHTML = buttontwo.getAttribute("data-text-original");
  } else {
    buttontwo.setAttribute("data-text-original", buttontwo.innerHTML);
    buttontwo.innerHTML = buttontwo.getAttribute("data-text-swap");
  }
}, false);

var buttonthree = document.getElementById("ButtonThree");
buttonthree.addEventListener('click', function() {
  if (buttonthree.getAttribute("data-text-swap") == buttonthree.innerHTML) {
    buttonthree.innerHTML = buttonthree.getAttribute("data-text-original");
  } else {
    buttonthree.setAttribute("data-text-original", buttonthree.innerHTML);
    buttonthree.innerHTML = buttonthree.getAttribute("data-text-swap");
  }
}, false);

var buttonfour = document.getElementById("ButtonFour");
buttonfour.addEventListener('click', function() {
  if (buttonfour.getAttribute("data-text-swap") == buttonfour.innerHTML) {
    buttonfour.innerHTML = buttonfour.getAttribute("data-text-original");
  } else {
    buttonfour.setAttribute("data-text-original", buttonfour.innerHTML);
    buttonfour.innerHTML = buttonfour.getAttribute("data-text-swap");
  }
}, false);