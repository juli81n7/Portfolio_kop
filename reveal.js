
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
    // for at tjekke scroll position på load
  reveal();

  
window.addEventListener("scroll", reveal_left);

function reveal_left() {
    var reveals = document.querySelectorAll(".reveal_left");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active_left");
      } else {
        reveals[i].classList.remove("active_left");
      }
    }
  }
    // for at tjekke scroll position på load
  reveal_left();


window.addEventListener("scroll", reveal_right);

function reveal_right() {
    var reveals = document.querySelectorAll(".reveal_right");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active_right");
      } else {
        reveals[i].classList.remove("active_right");
      }
    }
  }
    // for at tjekke scroll position på load
  reveal_right();

 
