document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("#navListLarge li a");
  listItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      listItems.forEach((li) => li.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const navListSmall = document.getElementById("navListSmall");
  menuButton.addEventListener("click", function () {
    navListSmall.classList.toggle("hidden");
  });
});
