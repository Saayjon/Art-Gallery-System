let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  // Hide all slides initially
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Increment the slide index
  slideIndex++;
  // Reset to the first slide if it exceeds the number of slides
  if (slideIndex > slides.length) { slideIndex = 1 }
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}
