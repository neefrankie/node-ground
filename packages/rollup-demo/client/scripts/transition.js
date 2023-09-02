function moveBall() {
  const f = document.getElementById("foo");
  document.addEventListener("click", (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  }, false);
}

moveBall()
