document.addEventListener("DOMContentLoaded", () => {
  const navlist = document.getElementById("navlist");
  const hamburger = document.getElementById("hamburger");

  // hamburger menu
  hamburger.addEventListener("click", () => {
    navlist.classList.toggle("navlist-active");
  });

  // ORDER BUTTON
  const orderBtn = document.getElementById("orderBtn");

  orderBtn.addEventListener("click", () => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("API not working");
      });
  });
});
