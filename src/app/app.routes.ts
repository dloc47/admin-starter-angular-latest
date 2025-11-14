import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Module components (direct imports for now - can be converted to lazy loading later)
import { UsersComponent } from './modules/users/users.component';
import { PackagesComponent } from './modules/packages/packages.component';
import { DestinationsComponent } from './modules/destinations/destinations.component';
import { ServicesComponent } from './modules/services/services.component';
import { MediaComponent } from './modules/media/media.component';
import { MessagesComponent } from './modules/messages/messages.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';
import { AboutPageComponent } from './modules/cms-pages/about-page/about-page.component';
import { TermsConditionsComponent } from './modules/cms-pages/terms-conditions/terms-conditions.component';
import { RefundPolicyComponent } from './modules/cms-pages/refund-policy/refund-policy.component';
import { FaqManagementComponent } from './modules/cms-pages/faq-management/faq-management.component';
import { ContactDetailsComponent } from './modules/cms-pages/contact-details/contact-details.component';
import { HomeCarouselComponent } from './modules/cms-pages/home-carousel/home-carousel.component';
import { FooterCopyrightComponent } from './modules/settings/footer-copyright/footer-copyright.component';
import { FooterDeveloperComponent } from './modules/settings/footer-developer/footer-developer.component';
import { SocialLinksComponent } from './modules/settings/social-links/social-links.component';
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
      
      // Dashboard
      { path: 'dashboard', component: DashboardComponent },
      
      // Packages Module
      { path: 'packages', component: PackagesComponent },
      { path: 'packages/create', component: PackagesComponent },
      { path: 'packages/edit/:id', component: PackagesComponent },
      { path: 'packages/view/:id', component: PackagesComponent },
      { path: 'packages/:id/itinerary', component: PackagesComponent },
      
      // Destinations Module
      { path: 'destinations', component: DestinationsComponent },
      { path: 'destinations/create', component: DestinationsComponent },
      { path: 'destinations/edit/:id', component: DestinationsComponent },
      { path: 'attractions', component: DestinationsComponent },
      { path: 'attractions/create', component: DestinationsComponent },
      { path: 'attractions/edit/:id', component: DestinationsComponent },
      
      // CMS Pages Module
      { path: 'cms-pages/home-carousel', component: HomeCarouselComponent },
      { path: 'cms-pages/about', component: AboutPageComponent },
      { path: 'cms-pages/terms', component: TermsConditionsComponent },
      { path: 'cms-pages/refund', component: RefundPolicyComponent },
      { path: 'cms-pages/faqs', component: FaqManagementComponent },
      { path: 'cms-pages/faqs/create', component: FaqManagementComponent },
      { path: 'cms-pages/faqs/edit/:id', component: FaqManagementComponent },
      { path: 'cms-pages/contact', component: ContactDetailsComponent },
      
      // Services Module
      { path: 'services', component: ServicesComponent },
      
      // Media Library Module
      { path: 'media', component: MediaComponent },
      
      // Messages Module
      { path: 'messages/inquiries', component: MessagesComponent },
      { path: 'messages/contact', component: MessagesComponent },
      { path: 'messages/view/:id', component: MessagesComponent },
      
      // Testimonials Module
      { path: 'testimonials', component: TestimonialsComponent },
      
      // Settings Module
      { path: 'settings/footer', component: FooterCopyrightComponent },
      { path: 'settings/developer', component: FooterDeveloperComponent },
      { path: 'settings/social', component: SocialLinksComponent },
      
      // Users Module
      { path: 'users', component: UsersComponent },
      { path: 'users/create', component: UsersComponent },
      { path: 'users/edit/:id', component: UsersComponent },
      { path: 'roles', component: UsersComponent },
      { path: 'roles/create', component: UsersComponent },
      { path: 'roles/edit/:id', component: UsersComponent },
    ]
  },

  // Error routes
  { 
    path: '**', 
    component: NotFoundComponent 
  }
];