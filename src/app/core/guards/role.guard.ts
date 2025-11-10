// src/app/core/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.authService.getUserRole();
    
    if (this.authService.isLoggedIn() && userRole === expectedRole) {
      return true;
    }
    
    // Redirect to unauthorized or dashboard if permission denied
    return this.router.createUrlTree(['/dashboard']);
  }
}