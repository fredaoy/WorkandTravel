// // Get the slider element
// const slider = document.querySelector('.slider-frame');

// // Get the current slide index
// let currentSlideIndex = 0;

// // Function to reset the slider to the first slide
// function resetSlider() {
//   currentSlideIndex = 0;
//   slider.style.animationName = 'none'; // Stop current animation
//   slider.style.animationDelay = '0s'; // Reset delay
//   setTimeout(() => {
//     slider.style.animationName = 'slide-animation'; // Restart animation
//   }, 100); // Wait 100ms for animation to start
// }

// // Function to move to the next slide
// function nextSlide() {
//   currentSlideIndex++;
//   slider.style.animationName = 'none'; // Stop current animation
//   slider.style.animationDelay = '0s'; // Reset delay
//   setTimeout(() => {
//     slider.style.animationName = 'slide-animation'; // Restart animation
//   }, 100); // Wait 100ms for animation to start
// }

// // Add event listeners for next slide functionality
// // (You can add event listeners for previous slide or other controls as needed)
// const nextButton = document.querySelector('.next-button'); // Replace with actual next button selector
// if (nextButton) {
//   nextButton.addEventListener('click', nextSlide);
// }

// // Reset the slider every 43 seconds (animation duration + pause)
// setInterval(resetSlider, 43000);
