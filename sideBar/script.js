const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
});

/* Nur Islom inserted code */
// Attach a click event listener to all anchor tags
// document.addEventListener("DOMContentLoaded", function() {
//   const spans = document.querySelectorAll("span");
//   const icons = document.querySelectorAll("i");
//   const links = spans.concat(icons);

//   links.forEach(link => {
//     link.addEventListener("click", function(event) {
//       // Prevent the default link behavior
//       event.preventDefault();

//       // Remove the clicked-link class from all links
//       links.forEach(link => {
//         link.classList.remove("clicked-link");
//       });

//       // Add the clicked-link class to the clicked link
//       this.classList.add("clicked-link");
//     });
//   });
// });