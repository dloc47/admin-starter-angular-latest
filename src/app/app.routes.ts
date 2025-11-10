import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Module components (direct imports for now - can be converted to lazy loading later)
import { QuizComponent } from './modules/quiz/quiz.component';
import { PlayerComponent } from './modules/player/player.component';
import { CouponComponent } from './modules/coupon/coupon.component';
import { UsersComponent } from './modules/users/users.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Public routes
  { 
    path: 'login', 
    component: LoginComponent 
  },

  // Protected routes (main app layout)
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard], // Protects all child routes
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      
      // Settings
      { path: 'settings', component: SettingsComponent },
      
      // Modules
      { path: 'quiz', component: QuizComponent },
      { path: 'players', component: PlayerComponent },
      { path: 'coupons', component: CouponComponent },
      { path: 'users', component: UsersComponent },
    ]
  },

  // Error routes
  { 
    path: '**', 
    component: NotFoundComponent 
  }
];