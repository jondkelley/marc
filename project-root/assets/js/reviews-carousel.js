document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('reviewsCarousel');
  const cards = carousel.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentIndex = 0;
  let cardsPerView = window.innerWidth < 768 ? 1 : 2; // <768px = mobile
  
  const totalCards = cards.length;
  
  function updateCarousel() {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsPerView) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalCards - cardsPerView;
  }
  
  nextBtn.addEventListener('click', function() {
    if (currentIndex < totalCards - cardsPerView) {
      currentIndex += cardsPerView;
      updateCarousel();
    }
  });
  
  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex -= cardsPerView;
      updateCarousel();
    }
  });

  // Recalculate on resize
  window.addEventListener('resize', () => {
    const newCardsPerView = window.innerWidth < 768 ? 1 : 2;
    if (newCardsPerView !== cardsPerView) {
      cardsPerView = newCardsPerView;
      currentIndex = 0; // reset to first set
      updateCarousel();
    }
  });

  updateCarousel();
});
