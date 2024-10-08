import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss'],
})
export class TermsOfUseComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/']); // Navigate back to the home page or previous page
  }
}
