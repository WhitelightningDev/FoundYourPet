import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/']); // Navigate back to the home page or previous page
  }
}
