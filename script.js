const navlist = document.getElementById("navlist");
const hamburger = document.getElementById("hamburger");

//click event

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("navlist-active");
});
