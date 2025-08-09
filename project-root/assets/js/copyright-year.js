// Dynamic Copyright Year Handler
class CopyrightHandler {
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.startYear = 2025;
    this.updateCopyrightElements();
  }

  getCopyrightYearText() {
    if (this.currentYear === this.startYear) {
      return this.currentYear.toString();
    } else {
      return `${this.startYear}-${this.currentYear}`;
    }
  }

  updateCopyrightElements() {
    // Update copyright year elements
    const copyrightYearElements = document.querySelectorAll('[data-copyright="year"]');
    copyrightYearElements.forEach(element => {
      element.textContent = this.getCopyrightYearText();
    });

    // Update full copyright text elements
    const copyrightTextElements = document.querySelectorAll('[data-copyright="full-text"]');
    copyrightTextElements.forEach(element => {
      element.innerHTML = `© ${this.getCopyrightYearText()} by Marc Asch, All rights reserved. <a href="sitemap.html" class="text-decoration-none text-light">Sitemap</a> | <a href="disclaimer.html" class="text-decoration-none text-light">Disclaimer</a> | <a href="privacy-policy.html" class="text-decoration-none text-light">Privacy Policy</a>`;
    });
  }
}

// Initialize copyright handler when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CopyrightHandler();
});
