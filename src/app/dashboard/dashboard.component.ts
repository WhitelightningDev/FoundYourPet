import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: token ? token : '',
    });

    this.http.get('http://localhost:3000/api/dashboard', { headers }).subscribe(
      (response: any) => {
        this.user = response;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }
}
