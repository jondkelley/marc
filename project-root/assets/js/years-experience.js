// Calculate years of experience since 2013
document.addEventListener('DOMContentLoaded', function() {
  const startYear = 2013;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  
  // Update the years experience span
  const yearsSpan = document.getElementById('years-experience');
  if (yearsSpan) {
    yearsSpan.textContent = yearsOfExperience;
  }
});
