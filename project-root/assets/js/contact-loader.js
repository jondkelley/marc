// Contact Information Loader
class ContactLoader {
  constructor() {
    this.contactInfo = null;
    this.loadContactInfo();
  }

  async loadContactInfo() {
    try {
      const response = await fetch('assets/js/contact-info.json');
      this.contactInfo = await response.json();
      this.updateContactElements();
    } catch (error) {
      console.error('Error loading contact information:', error);
      // Fallback to hardcoded values if JSON fails to load
      this.contactInfo = {
        office: {
          name: "Marc Asch, Esq.",
          buildingName: "Barrister Building",
          address: "137 N Park St",
          city: "Kalamazoo", 
          state: "MI",
          zipCode: "49007",
          fullAddress: "137 N Park St, Kalamazoo, MI 49007"
        },
        phone: {
          number: "(617) 653-8184",
          link: "tel:617-653-8184"
        },
        email: {
          address: "marc.a.asch@gmail.com",
          link: "mailto:marc.a.asch@gmail.com"
        }
      };
      this.updateContactElements();
    }
  }

  updateContactElements() {
    if (!this.contactInfo) return;

    // Update office name elements
    const nameElements = document.querySelectorAll('[data-contact="name"]');
    nameElements.forEach(element => {
      element.textContent = this.contactInfo.office.name;
    });

    // Update building name elements
    const buildingNameElements = document.querySelectorAll('[data-contact="building-name"]');
    buildingNameElements.forEach(element => {
      element.textContent = this.contactInfo.office.buildingName;
    });

    // Update office address elements
    const addressElements = document.querySelectorAll('[data-contact="address"]');
    addressElements.forEach(element => {
      element.textContent = this.contactInfo.office.address;
    });

    const cityStateElements = document.querySelectorAll('[data-contact="city-state"]');
    cityStateElements.forEach(element => {
      element.textContent = `${this.contactInfo.office.city}, ${this.contactInfo.office.state} ${this.contactInfo.office.zipCode}`;
    });

    const fullAddressElements = document.querySelectorAll('[data-contact="full-address"]');
    fullAddressElements.forEach(element => {
      element.textContent = this.contactInfo.office.fullAddress;
    });

    // Update phone number elements
    const phoneElements = document.querySelectorAll('[data-contact="phone"]');
    phoneElements.forEach(element => {
      element.textContent = this.contactInfo.phone.number;
      if (element.tagName === 'A') {
        element.href = this.contactInfo.phone.link;
      }
    });

    // Update phone links - this is the key part for replacing hardcoded numbers
    const phoneLinkElements = document.querySelectorAll('[data-contact="phone-link"]');
    phoneLinkElements.forEach(element => {
      element.href = this.contactInfo.phone.link;
      element.textContent = this.contactInfo.phone.number;
    });

    // Also update any tel: links that might have hardcoded numbers
    const telLinks = document.querySelectorAll('a[href^="tel:"]');
    telLinks.forEach(element => {
      if (element.textContent.includes('(555) 555-5555')) {
        element.href = this.contactInfo.phone.link;
        element.textContent = this.contactInfo.phone.number;
      }
    });

    // Replace any remaining placeholder phone numbers in the document
    this.replacePlaceholderPhoneNumbers();

    // Update email elements
    const emailElements = document.querySelectorAll('[data-contact="email"]');
    emailElements.forEach(element => {
      element.textContent = this.contactInfo.email.address;
      if (element.tagName === 'A') {
        element.href = this.contactInfo.email.link;
      }
    });

    // Update email links
    const emailLinkElements = document.querySelectorAll('[data-contact="email-link"]');
    emailLinkElements.forEach(element => {
      element.href = this.contactInfo.email.link;
    });
  }

  replacePlaceholderPhoneNumbers() {
    // Replace any remaining placeholder phone numbers (555) 555-5555
    // This handles cases where phone numbers might be in text content without specific data attributes
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.includes('(555) 555-5555')) {
        textNodes.push(node);
      }
    }

    textNodes.forEach(textNode => {
      textNode.textContent = textNode.textContent.replace(
        /\(555\) 555-5555/g,
        this.contactInfo.phone.number
      );
    });
  }
}

// Initialize contact loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ContactLoader();
});
