const basicScrollTop = () => {
  const btnTop = document.querySelector(".goTop");

  const btnReveal = () => {
    const position = document.querySelector(".position");
    position.innerHTML = window.scrollY + "px";
    if (window.scrollY >= 300) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  };

  const TopscrollTo = () => {
    if (window.scrollY != 0) {
      setTimeout(function() {
        window.scrollTo(0, window.scrollY - 30);
        TopscrollTo();
      }, 5);
    }
  };
  // Listeners
  window.addEventListener("scroll", btnReveal);
  btnTop.addEventListener("click", TopscrollTo);
};
basicScrollTop();
