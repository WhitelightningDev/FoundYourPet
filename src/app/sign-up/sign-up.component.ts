/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
// sign-up.component.ts
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
[x: string]: any;
  formData = {
    name: '',
    surname: '',
    contact: '',
    email: '',
    password: '',
    privacyPolicy: false,
    termsConditions: false,
    agreement: false,
  };

  constructor(private toastr: ToastrService) {} // Inject ToastrService

  ngOnInit() {}

  onSubmit(form: any) {
    // Check for form validity
    if (form.valid) {
      // Handle successful form submission
      console.log('Form submitted successfully:', this.formData);
      this.toastr.success('Sign Up successful!', 'Success'); // Show success toast
      // Reset the form after submission
      form.reset();
    } else {
      // Display a message indicating which fields are missing
      this.toastr.error('Please fill in all required fields and agree to the terms.', 'Error'); // Show error toast
    }
  }
}
