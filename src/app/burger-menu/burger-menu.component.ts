import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {
  isMenuOpen = false;

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter(); // Create an output event

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
    this.menuToggle.emit(this.isMenuOpen); // Emit the new state to the parent component
  }
}
