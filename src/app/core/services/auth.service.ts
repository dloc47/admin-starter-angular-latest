// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole = 'user'; // Default role

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Replace with actual authentication logic
    if (username === 'admin' && password === 'admin123') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    } else if (username && password) {
      this.isAuthenticated = true;
      this.userRole = 'user';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = '';
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
  }
}