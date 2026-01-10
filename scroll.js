const elements = document.querySelectorAll(".reveal");

function scrollReveal() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", scrollReveal);
scrollReveal();
