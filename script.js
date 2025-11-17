
// ...existing code...
const MenuBtn = document.getElementById("MenuBtn");

if (MenuBtn) {
  MenuBtn.addEventListener("click", function (e) {
    document.body.classList.toggle("mobile-nav-active");
    this.classList.toggle("fa-xmark");
  });
}
// ...existing code...
if (typeof Typed !== "undefined") {
  const typed = new Typed(".autho-input", {
    strings: ["Front-End Developer!", "Freelancer!", "Graphics Designer", "YouTuber!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true,
  });
} else {
  console.warn("Typed.js not loaded — typing animation skipped.");
}
// ...existing code...
