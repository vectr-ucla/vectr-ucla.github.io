// Shrink the navbar when the user scrolls down
window.onscroll = function() {
  let threshold = 80; // [pixels] Scroll distance from top of page
  document.getElementById("vectrNavbar").classList.toggle("vectr-shrunk", document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold);
}
