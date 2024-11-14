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
// Toggle Artists Section
document.addEventListener("DOMContentLoaded", function() {
  const artistsLink = document.getElementById("artists-link");
  const gallerySection = document.getElementById("gallery");
  const artistsSection = document.getElementById("artists-section");
  const slideshowContainer = document.querySelector(".slideshow-container");

  // By default, show the slideshow, hide artists
  slideshowContainer.style.display = "block";
  artistsSection.style.display = "none";

  // Toggle artists section visibility on "Artists" link click
  artistsLink.addEventListener("click", function(event) {
    event.preventDefault();
    gallerySection.style.display = "none";  // Hide the main gallery content
    artistsSection.style.display = "grid";  // Show artists section
    slideshowContainer.style.display = "none"; // Hide slideshow
  });

  // Hide artists section and show main gallery content when clicking outside of it
  document.addEventListener("click", function(event) {
    if (!artistsSection.contains(event.target) && event.target !== artistsLink) {
      artistsSection.style.display = "none"; // Hide artists section
      gallerySection.style.display = "block"; // Show gallery content
      slideshowContainer.style.display = "block"; // Show slideshow
    }
  });
});

document.getElementById("home-link").addEventListener("click", () => {
  document.getElementById("gallery").style.display = "block";
  document.getElementById("artists-section").style.display = "none";
});

document.getElementById("artists-link").addEventListener("click", () => {
  document.getElementById("gallery").style.display = "none";
  document.getElementById("artists-section").style.display = "grid";
});


const contactLink = document.getElementById('contact-link');

contactLink.addEventListener('click', function(event) {
  document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
});