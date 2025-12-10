// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // ===== THEME: load saved preference =====
  var savedTheme = localStorage.getItem("theme"); // "dark", "light", or null

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else if (savedTheme === "light") {
    document.body.classList.remove("dark-mode");
  }
  // If savedTheme is null, we just use the default (light) from CSS.

  // ===== THEME: toggle + save =====
  var themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", function () {
      console.log("Dark mode button pressed"); // <-- your log

      document.body.classList.toggle("dark-mode");

      // Save the new choice
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        console.log("Theme set to: dark");
      } else {
        localStorage.setItem("theme", "light");
        console.log("Theme set to: light");
      }
    });
  }

  // ===== GALLERY: captions toggle =====
  var toggleCaptionsButton = document.getElementById("toggle-captions");
  if (toggleCaptionsButton) {
    var captions = document.querySelectorAll(".gallery-caption");
    toggleCaptionsButton.addEventListener("click", function () {
      captions.forEach(function (caption) {
        caption.classList.toggle("hidden");
      });
      console.log("Caption toggle button pressed");
    });
  }
});