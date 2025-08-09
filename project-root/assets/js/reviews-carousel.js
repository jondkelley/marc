// Reviews Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('reviewsCarousel');
  const cards = carousel.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentIndex = 0;
  const cardsPerView = 2; // Show 2 cards at a time
  const totalCards = cards.length;
  
  // Function to update carousel display
  function updateCarousel() {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsPerView) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalCards - cardsPerView;
  }
  
  // Next button click - show next 2 reviews
  nextBtn.addEventListener('click', function() {
    if (currentIndex < totalCards - cardsPerView) {
      currentIndex += cardsPerView;
      updateCarousel();
    }
  });
  
  // Previous button click - show previous 2 reviews
  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex -= cardsPerView;
      updateCarousel();
    }
  });
  
  // Initialize carousel - show first 2 reviews
  updateCarousel();
}); 