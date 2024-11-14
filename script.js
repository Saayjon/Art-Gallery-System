// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Ensure slideshow is visible on page load, and artists section is hidden
document.addEventListener("DOMContentLoaded", function() {
  const artistsLink = document.getElementById("artists-link");
  const homeLink = document.getElementById("home-link");
  const contactLink = document.getElementById("contact-link");
  const mainContent = document.getElementById("main-content");
  const artistsSection = document.getElementById("artists-section");
  const contactSection = document.getElementById("contact-section");

  // Initial state: show main content, hide artists section
  mainContent.style.display = "flex";
  artistsSection.style.display = "none";

  // Show artists section and hide main content when "Artists" is clicked
  artistsLink.addEventListener("click", function(event) {
    event.preventDefault();
    mainContent.style.display = "none";  // Hide main content
    artistsSection.style.display = "grid";  // Show artists section
  });

  // Show main content and hide artists section when "Home" is clicked
  homeLink.addEventListener("click", function(event) {
    event.preventDefault();
    mainContent.style.display = "flex"; // Reset to flex layout
    artistsSection.style.display = "none";  // Hide artists section
  });

  // Smooth scroll to the contact section when "Contact" is clicked
  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});