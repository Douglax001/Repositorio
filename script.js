document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('img_menu');
    const menu = document.querySelector('header ul.menu');
    
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});

const btnScrollTop = document.querySelector(".btn-scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnScrollTop.classList.add("btn-scroll");
  } else {
    btnScrollTop.classList.remove("btn-scroll");
  }
});

btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
