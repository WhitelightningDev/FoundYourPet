import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isMenuOpen: boolean = false; // State to manage menu open/close
  fabVisible = false;
  private clickListener: (() => void) | null = null; // To store the global click event handler

  constructor(private renderer: Renderer2) {}

  // Toggle FAB visibility
  toggleFab() {
    this.fabVisible = !this.fabVisible;

    if (this.fabVisible) {
      // Add global click listener if FAB is visible
      this.addGlobalClickListener();
    } else {
      // Remove global click listener if FAB is not visible
      this.removeGlobalClickListener();
    }
  }

  // Open WhatsApp with a specific number
  openWhatsApp() {
    const phoneNumber = '+27746588885';
    window.open(`https://wa.me/${phoneNumber}`, '_system');
  }

  // Open the default email app
  openEmail() {
    const email = 'danielmommsen@hotmail.com';
    window.open(`mailto:${email}`, '_system');
  }

  // Initiate a phone call
  callPhone() {
    const phoneNumber = '+27746588885';
    window.open(`tel:${phoneNumber}`, '_system');
  }

  // Add a global click listener
  addGlobalClickListener() {
    this.clickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const fabElement = document.querySelector('ion-fab');
      if (fabElement && !fabElement.contains(event.target as Node)) {
        this.fabVisible = false;
        this.removeGlobalClickListener(); // Remove listener after closing
      }
    });
  }

  // Remove the global click listener
  removeGlobalClickListener() {
    if (this.clickListener) {
      this.clickListener(); // This removes the listener
      this.clickListener = null; // Reset the listener reference
    }
  }

  // Function to handle menu toggle
  toggleMenu(open: boolean) {
    this.isMenuOpen = open; // Update menu state based on emitted value
  }
}
