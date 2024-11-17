//header toggle

let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});
//typing Effective
let typed = new Typed(" .autho-input", {
  strings: ["Front-End Developer!", "Freelancer!", "UI Designer", "YouTuber!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 200,
  loop: true,
});
