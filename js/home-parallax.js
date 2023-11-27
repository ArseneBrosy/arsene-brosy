const cloudsMul = .08;

document.addEventListener("scroll", (e) => {
  if (window.scrollY >= window.innerHeight / 2) {
    return;
  }
  document.querySelector("#clouds").style.bottom = (10 + window.scrollY * cloudsMul) + "vh";
  document.querySelector("h1.title").style.transform = `translateY(${window.scrollY}px)`;
  document.querySelector("p.title").style.transform = `translateY(${window.scrollY}px)`;

  document.querySelector("#blank-space").style.height = (window.scrollY * cloudsMul + 1) + "vh";
  document.querySelector("#blank-space").style.transform = `translateY(-${window.scrollY * cloudsMul + .5}vh)`;
});