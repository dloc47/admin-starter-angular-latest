import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowLeft, Home } from 'lucide-angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  standalone: true,
  imports: [RouterModule, LucideAngularModule]
})
export class NotFoundComponent {
  // Icons
  ArrowLeft = ArrowLeft;
  Home = Home;

  constructor(private router: Router) {}

  goBack() {
    // Use the navigation history if available, otherwise go to home
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
