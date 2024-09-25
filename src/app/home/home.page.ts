import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isMenuOpen: boolean = false; // State to manage menu open/close

  constructor() {}

  // Function to handle menu toggle
  toggleMenu(open: boolean) {
    this.isMenuOpen = open; // Update menu state based on emitted value
  }
}
