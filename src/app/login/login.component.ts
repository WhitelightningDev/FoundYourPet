import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Axios } from 'axios';
import { AuthService } from '../dashboard/auth.service'; // Import the AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    console.log('Login Data:', this.loginData); // Log the login data
    // Make POST request to backend API for login
    this.http.post('http://localhost:3000/api/login', this.loginData)
      .subscribe(
        (response: any) => {
          this.authService.setToken(response.token); // Store JWT token using AuthService
          this.toastr.success('Login successful!', 'Success');
          this.router.navigate(['/dashboard']); // Redirect to dashboard
        },
        (error) => {
          console.error('Login failed:', error); // Log the full error response
          this.toastr.error('Login failed. Please check your credentials.', 'Error');
        }
      );
}


}
