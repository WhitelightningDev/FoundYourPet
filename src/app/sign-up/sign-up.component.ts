import { Component } from '@angular/core';
import axios, { AxiosError } from 'axios'; // Import AxiosError for proper error typing
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
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

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) {}

  async onSubmit(form: any): Promise<void> {
    // Check if form is valid
    if (!form.valid) {
      this.toastr.error('Please fill in all required fields and agree to the terms.', 'Error');
      return;
    }

    try {
      // Send POST request using Axios to backend API
      const response = await axios.post('http://localhost:3000/api/signup', this.formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      // Handle successful signup
      this.toastr.success('Sign up successful!', 'Success');
      this.router.navigate(['/login']); // Redirect after successful signup
    } catch (error: unknown) {
      // Enhanced error handling

      let errorMessage: string;

      // Check if error is AxiosError type
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server-side error
          errorMessage = `Server error (Status: ${error.response.status}): ${error.response.data?.msg || 'Unknown error'}`;
        } else if (error.request) {
          // No response was received
          errorMessage = 'No response from the server. Please check your connection.';
        } else {
          // Other Axios related errors
          errorMessage = `Request error: ${error.message}`;
        }
      } else {
        // Handle non-Axios errors
        errorMessage = 'An unexpected error occurred. Please try again later.';
      }

      // Show the error message
      this.toastr.error(errorMessage, 'Error');
    }

    // Reset form after submission
    form.reset();
  }
}
