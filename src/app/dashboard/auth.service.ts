import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login'; // API URL for login

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}

  // Login method to authenticate the user
  login(email: string, password: string) {
    return this.http.post<{ token: string }>(this.apiUrl, { email, password }).subscribe(
      (response) => {
        this.setToken(response.token); // Store token using the setToken method
        this.toastr.success('Login successful', 'Success');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.toastr.error('Login failed. Please check your credentials.', 'Error');
      }
    );
  }

  // Method to save the token in localStorage
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Retrieve token for authorized requests
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Logout method to clear user session
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // Optional: Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken(); // Returns true if token exists
  }
}
