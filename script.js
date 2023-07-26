var show = false;

// hamburger menu toggler
function toggle() {
  if (show === false) {
    document.getElementById("toggler").style.display = "block";
    document.getElementById(
      "toggle-button"
    ).innerHTML = `<i class="fas fa-times"></i>`;
    show = true;
  } else {
    document.getElementById("toggler").style.display = "none";
    show = false;
    document.getElementById(
      "toggle-button"
    ).innerHTML = `<i class="fas fa-bars"></i>`;
  }
}
