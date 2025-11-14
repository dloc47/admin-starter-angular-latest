# Immanuel Tours & Travels - CMS Architecture & Component List

## 📋 Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Navigation Structure](#navigation-structure)
3. [Component List](#component-list)
4. [Module Structure](#module-structure)
5. [Suggested Features](#suggested-features)

---


## 🏗️ Architecture Overview

### Technology Stack
- **Framework**: Angular 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide Angular
- **State Management**: RxJS Services
- **Routing**: Angular Router with Lazy Loading
- **Authentication**: JWT-based Auth Guards

### Architecture Pattern
- **Modular Architecture**: Feature-based modules
- **Component-Based**: Reusable, standalone components
- **Service Layer**: API services for data management
- **Guard Layer**: Route protection and role-based access
- **Shared Module**: Common utilities, pipes, directives

---

## 🧭 Navigation Structure

### Main Navigation Items

```
📊 Dashboard
├── Overview Statistics
├── Recent Bookings
├── Revenue Charts
└── Quick Actions

🗺️ Tour Packages
├── Package List
├── Create/Edit Package
├── Package Categories
├── Itinerary Management
└── Pricing Management

🚗 Services
├── Car Rental
│   ├── Vehicle List
│   ├── Add/Edit Vehicle
│   └── Rental Bookings
├── Hotel Booking
│   ├── Hotel List
│   ├── Add/Edit Hotel
│   └── Booking Management
├── Trekking & Hiking
│   ├── Trek Packages
│   ├── Route Management
│   └── Guide Management
├── River Rafting
│   ├── Rafting Packages
│   ├── Schedule Management
│   └── Safety Equipment
├── River Camping & Tents
│   ├── Camping Sites
│   ├── Tent Inventory
│   └── Booking Management
└── Permit Assistance
    ├── Permit Types
    ├── Application Tracking
    └── Document Management

📍 Destinations
├── Destination List
├── Add/Edit Destination
├── Attractions Management
├── Photo Gallery
└── Location Maps

📝 Bookings
├── All Bookings
├── Pending Bookings
├── Confirmed Bookings
├── Cancelled Bookings
├── Booking Details
└── Payment Tracking

👥 Customers
├── Customer List
├── Customer Details
├── Booking History
├── Loyalty Program
└── Communication Log

💬 Testimonials
├── Testimonial List
├── Add/Edit Testimonial
├── Pending Reviews
└── Review Moderation

📰 Blog/News
├── Post List
├── Create/Edit Post
├── Categories
├── Tags
└── Media Library

🎨 Content Management
├── Home Carousel
├── About Page
├── Contact Page
├── FAQ Management
├── Facts & Myths Carousel
└── Page Builder

📧 Enquiries
├── Contact Form Submissions
├── Quote Requests
├── General Enquiries
└── Response Management

💰 Financial
├── Payments
│   ├── Payment List
│   ├── Payment Methods
│   └── Refund Management
├── Invoices
│   ├── Invoice List
│   ├── Generate Invoice
│   └── Invoice Templates
└── Reports
    ├── Revenue Reports
    ├── Booking Reports
    └── Financial Analytics

📊 Reports & Analytics
├── Booking Analytics
├── Revenue Analytics
├── Customer Analytics
├── Service Performance
├── Destination Popularity
└── Custom Reports

⚙️ Settings
├── General Settings
├── Email Settings
├── Payment Gateway
├── Notification Settings
├── SEO Settings
└── System Configuration

👤 Users & Roles
├── User List
├── Add/Edit User
├── Roles & Permissions
└── Activity Logs

🎯 Promotions
├── Discount Codes
├── Seasonal Offers
├── Special Packages
└── Promotional Campaigns

📱 Integrations
├── Social Media
├── Google Maps
├── Payment Gateways
└── Email Services
```

---

## 🧩 Component List

### 1. Dashboard Module
- **dashboard.component** - Main dashboard overview
  - **dashboard-stats.component** - Statistics cards (Total Bookings, Revenue, Customers, etc.)
  - **revenue-chart.component** - Revenue visualization
  - **booking-chart.component** - Booking trends chart
  - **recent-bookings.component** - Recent bookings table
  - **quick-actions.component** - Quick action buttons
  - **upcoming-tours.component** - Upcoming tour schedule

### 2. Tour Packages Module
- **tour-packages.component** - Main tour packages container
  - **package-list.component** - List all tour packages
  - **package-create-edit.component** - Create/Edit tour package form
  - **package-detail.component** - Package details view
  - **package-categories.component** - Manage package categories
  - **itinerary-builder.component** - Build tour itineraries
  - **pricing-manager.component** - Manage package pricing
  - **package-gallery.component** - Package image gallery
  - **package-availability.component** - Manage availability calendar

### 3. Services Module
- **services.component** - Main services container
  - **car-rental.component** - Car rental management
    - **vehicle-list.component** - List all vehicles
    - **vehicle-create-edit.component** - Add/Edit vehicle
    - **vehicle-detail.component** - Vehicle details
    - **rental-bookings.component** - Rental bookings
  - **hotel-booking.component** - Hotel booking management
    - **hotel-list.component** - List all hotels
    - **hotel-create-edit.component** - Add/Edit hotel
    - **hotel-detail.component** - Hotel details
    - **room-management.component** - Manage rooms
    - **hotel-bookings.component** - Hotel bookings
  - **trekking-hiking.component** - Trekking & hiking management
    - **trek-packages.component** - Trek packages
    - **route-management.component** - Manage routes
    - **guide-management.component** - Manage guides
    - **trek-bookings.component** - Trek bookings
  - **river-rafting.component** - River rafting management
    - **rafting-packages.component** - Rafting packages
    - **schedule-management.component** - Manage schedules
    - **safety-equipment.component** - Safety equipment inventory
    - **rafting-bookings.component** - Rafting bookings
  - **river-camping.component** - River camping management
    - **camping-sites.component** - Camping sites
    - **tent-inventory.component** - Tent inventory
    - **camping-bookings.component** - Camping bookings
  - **permit-assistance.component** - Permit assistance management
    - **permit-types.component** - Permit types
    - **application-tracking.component** - Track applications
    - **document-management.component** - Manage documents

### 4. Destinations Module
- **destinations.component** - Main destinations container
  - **destination-list.component** - List all destinations
  - **destination-create-edit.component** - Add/Edit destination
  - **destination-detail.component** - Destination details
  - **attractions-management.component** - Manage attractions
  - **destination-gallery.component** - Destination photo gallery
  - **location-map.component** - Interactive map
  - **destination-seo.component** - SEO settings for destinations

### 5. Bookings Module
- **bookings.component** - Main bookings container
  - **booking-list.component** - List all bookings
  - **booking-detail.component** - Booking details
  - **booking-create.component** - Create manual booking
  - **booking-edit.component** - Edit booking
  - **booking-status.component** - Update booking status
  - **payment-tracking.component** - Track payments
  - **booking-timeline.component** - Booking timeline
  - **booking-notes.component** - Add/view notes

### 6. Customers Module
- **customers.component** - Main customers container
  - **customer-list.component** - List all customers
  - **customer-detail.component** - Customer details
  - **customer-create-edit.component** - Add/Edit customer
  - **booking-history.component** - Customer booking history
  - **loyalty-program.component** - Loyalty program management
  - **communication-log.component** - Communication history
  - **customer-segments.component** - Customer segmentation

### 7. Testimonials Module
- **testimonials.component** - Main testimonials container
  - **testimonial-list.component** - List all testimonials
  - **testimonial-create-edit.component** - Add/Edit testimonial
  - **testimonial-detail.component** - Testimonial details
  - **pending-reviews.component** - Pending reviews moderation
  - **review-moderation.component** - Review approval/rejection

### 8. Blog/News Module
- **blog.component** - Main blog container
  - **post-list.component** - List all blog posts
  - **post-create-edit.component** - Create/Edit blog post
  - **post-detail.component** - Post details
  - **post-categories.component** - Manage categories
  - **post-tags.component** - Manage tags
  - **media-library.component** - Media library
  - **post-preview.component** - Preview post

### 9. Content Management Module
- **content-management.component** - Main content container
  - **home-carousel.component** - Home page carousel (existing)
  - **about-page.component** - About page content (existing)
  - **contact-page.component** - Contact page content (existing)
  - **faq-management.component** - FAQ management (existing)
  - **facts-myths-carousel.component** - Facts & myths carousel (existing)
  - **page-builder.component** - Drag-and-drop page builder
  - **seo-manager.component** - SEO settings manager
  - **meta-tags.component** - Meta tags management

### 10. Enquiries Module
- **enquiries.component** - Main enquiries container
  - **enquiry-list.component** - List all enquiries
  - **enquiry-detail.component** - Enquiry details
  - **contact-form-submissions.component** - Contact form submissions
  - **quote-requests.component** - Quote requests
  - **response-management.component** - Manage responses
  - **enquiry-follow-up.component** - Follow-up reminders

### 11. Financial Module
- **financial.component** - Main financial container
  - **payments.component** - Payment management
    - **payment-list.component** - List all payments
    - **payment-detail.component** - Payment details
    - **payment-methods.component** - Manage payment methods
    - **refund-management.component** - Refund management
  - **invoices.component** - Invoice management
    - **invoice-list.component** - List all invoices
    - **invoice-generate.component** - Generate invoice
    - **invoice-templates.component** - Invoice templates
    - **invoice-preview.component** - Invoice preview
  - **financial-reports.component** - Financial reports
    - **revenue-report.component** - Revenue reports
    - **booking-report.component** - Booking reports
    - **financial-analytics.component** - Financial analytics

### 12. Reports & Analytics Module
- **reports.component** - Main reports container
  - **booking-analytics.component** - Booking analytics
  - **revenue-analytics.component** - Revenue analytics
  - **customer-analytics.component** - Customer analytics
  - **service-performance.component** - Service performance
  - **destination-popularity.component** - Destination popularity
  - **custom-reports.component** - Custom report builder
  - **export-reports.component** - Export reports (PDF, Excel, CSV)

### 13. Settings Module
- **settings.component** - Main settings container (existing)
  - **general-settings.component** - General settings
  - **email-settings.component** - Email configuration
  - **payment-gateway.component** - Payment gateway settings
  - **notification-settings.component** - Notification settings
  - **seo-settings.component** - SEO settings
  - **system-configuration.component** - System configuration
  - **backup-restore.component** - Backup and restore

### 14. Users & Roles Module
- **users.component** - Main users container (existing)
  - **user-list.component** - List all users (existing)
  - **user-create-edit.component** - Add/Edit user (existing)
  - **user-detail.component** - User details
  - **roles-permissions.component** - Roles & permissions (existing)
  - **activity-logs.component** - Activity logs
  - **user-profile.component** - User profile

### 15. Promotions Module
- **promotions.component** - Main promotions container
  - **discount-codes.component** - Discount codes management
  - **seasonal-offers.component** - Seasonal offers
  - **special-packages.component** - Special packages
  - **promotional-campaigns.component** - Promotional campaigns
  - **coupon-management.component** - Coupon management (existing)

### 16. Integrations Module
- **integrations.component** - Main integrations container
  - **social-media.component** - Social media integration
  - **google-maps.component** - Google Maps integration
  - **payment-gateways.component** - Payment gateway integration
  - **email-services.component** - Email service integration
  - **sms-services.component** - SMS service integration
  - **analytics.component** - Analytics integration (Google Analytics, etc.)

### 17. Shared Components
- **shared/components/**
  - **data-table.component** - Reusable data table
  - **pagination.component** - Pagination component
  - **search-filter.component** - Search and filter
  - **image-upload.component** - Image upload
  - **file-upload.component** - File upload
  - **rich-text-editor.component** - Rich text editor
  - **date-picker.component** - Date picker
  - **time-picker.component** - Time picker
  - **calendar.component** - Calendar component
  - **map-component.component** - Map integration
  - **gallery.component** - Image gallery
  - **modal.component** - Modal dialog
  - **confirm-dialog.component** - Confirmation dialog
  - **toast-notification.component** - Toast notifications
  - **loading-spinner.component** - Loading spinner
  - **empty-state.component** - Empty state
  - **status-badge.component** - Status badge
  - **form-field.component** - Form field wrapper
  - **select-dropdown.component** - Select dropdown
  - **multi-select.component** - Multi-select
  - **tag-input.component** - Tag input
  - **price-input.component** - Price input with currency
  - **phone-input.component** - Phone number input
  - **email-input.component** - Email input
  - **password-input.component** - Password input
  - **rating-component.component** - Rating component
  - **review-card.component** - Review card
  - **tour-card.component** - Tour package card
  - **service-card.component** - Service card
  - **destination-card.component** - Destination card
  - **booking-card.component** - Booking card
  - **customer-card.component** - Customer card
  - **invoice-preview.component** - Invoice preview
  - **receipt-preview.component** - Receipt preview

---

## 📦 Module Structure

```
src/app/
├── core/
│   ├── guards/
│   │   ├── auth.guard.ts
│   │   ├── role.guard.ts
│   │   └── permission.guard.ts
│   ├── interceptors/
│   │   ├── auth.interceptor.ts
│   │   ├── error.interceptor.ts
│   │   └── loading.interceptor.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── tour-package.service.ts
│   │   ├── booking.service.ts
│   │   ├── customer.service.ts
│   │   ├── destination.service.ts
│   │   ├── service.service.ts
│   │   ├── testimonial.service.ts
│   │   ├── blog.service.ts
│   │   ├── enquiry.service.ts
│   │   ├── payment.service.ts
│   │   ├── invoice.service.ts
│   │   ├── report.service.ts
│   │   ├── notification.service.ts
│   │   └── file-upload.service.ts
│   ├── models/
│   │   ├── tour-package.model.ts
│   │   ├── booking.model.ts
│   │   ├── customer.model.ts
│   │   ├── destination.model.ts
│   │   ├── service.model.ts
│   │   └── user.model.ts
│   └── constants/
│       ├── enums/
│       └── api-endpoints.ts
├── modules/
│   ├── dashboard/
│   ├── tour-packages/
│   ├── services/
│   ├── destinations/
│   ├── bookings/
│   ├── customers/
│   ├── testimonials/
│   ├── blog/
│   ├── content-management/
│   ├── enquiries/
│   ├── financial/
│   ├── reports/
│   ├── promotions/
│   ├── integrations/
│   └── users/
├── shared/
│   ├── components/
│   ├── directives/
│   ├── pipes/
│   └── shared.module.ts
├── layout/
│   ├── header/
│   ├── sidebar/
│   ├── footer/
│   └── layout.component.ts
└── pages/
    ├── login/
    ├── not-found/
    └── settings/
```

---

## 💡 Suggested Features

### 1. **Advanced Booking System**
- Real-time availability checking
- Multiple payment gateway integration
- Automated confirmation emails
- Booking reminders (SMS/Email)
- Waitlist management
- Group booking discounts
- Seasonal pricing automation

### 2. **Customer Portal**
- Customer login/registration
- Booking history and details
- Online payment gateway
- Download invoices and receipts
- Review and rating system
- Loyalty points tracking
- Profile management

### 3. **Mobile App Integration**
- RESTful API for mobile app
- Push notifications
- Mobile booking system
- Offline mode support
- GPS tracking for tours

### 4. **Smart Recommendations**
- AI-based tour recommendations
- Personalized content based on customer preferences
- Upselling and cross-selling suggestions
- Dynamic pricing based on demand

### 5. **Communication System**
- Automated email campaigns
- SMS notifications
- WhatsApp integration
- In-app messaging
- Newsletter management
- Follow-up automation

### 6. **Inventory Management**
- Vehicle fleet management
- Hotel room inventory
- Camping equipment tracking
- Guide availability
- Real-time inventory updates

### 7. **Advanced Analytics**
- Booking trends analysis
- Revenue forecasting
- Customer behavior analysis
- Service performance metrics
- Destination popularity tracking
- Conversion rate optimization
- A/B testing for packages

### 8. **Multi-language Support**
- Multiple language support
- Translation management
- RTL support for Arabic/Hebrew
- Language-specific content

### 9. **SEO & Marketing**
- SEO optimization tools
- Social media integration
- Google Ads integration
- Facebook Pixel integration
- Marketing campaign tracking
- Email marketing automation
- Affiliate program management

### 10. **Document Management**
- Permit document storage
- Customer document upload
- Document templates
- E-signature integration
- Document expiration tracking

### 11. **Review & Rating System**
- Automated review requests
- Review moderation
- Review analytics
- Response management
- Review display widgets

### 12. **Live Chat Support**
- Real-time chat support
- Chatbot integration
- Chat history
- Multi-agent support
- Automated responses

### 13. **Virtual Tours**
- 360-degree tour views
- Virtual reality integration
- Interactive maps
- Video tours
- Photo galleries

### 14. **Loyalty Program**
- Points system
- Reward management
- Tier-based benefits
- Referral program
- Birthday rewards

### 15. **Weather Integration**
- Weather forecast for destinations
- Weather-based recommendations
- Cancellation policies based on weather
- Alert system for weather conditions

### 16. **Social Media Management**
- Social media post scheduling
- Social media analytics
- Social media content library
- Hashtag management
- Social media monitoring

### 17. **Email Templates**
- Customizable email templates
- Email template builder
- Automated email triggers
- Email analytics
- A/B testing for emails

### 18. **Payment Integration**
- Multiple payment gateways (Stripe, PayPal, Razorpay, etc.)
- Payment plans and installments
- Refund management
- Payment reconciliation
- Payment gateway analytics

### 19. **Reporting & Export**
- Custom report builder
- Scheduled reports
- Export to PDF/Excel/CSV
- Email reports
- Dashboard widgets

### 20. **Security Features**
- Two-factor authentication
- IP whitelisting
- Activity logging
- Data encryption
- Regular backups
- GDPR compliance tools

### 21. **API & Webhooks**
- RESTful API
- Webhook management
- API documentation
- API key management
- Third-party integrations

### 22. **Calendar & Scheduling**
- Calendar view for bookings
- Resource scheduling
- Conflict detection
- Automated reminders
- Recurring bookings

### 23. **Gamification**
- Achievement system
- Badges and rewards
- Leaderboards
- Challenges and contests
- Customer engagement tools

### 24. **Accessibility Features**
- WCAG compliance
- Screen reader support
- Keyboard navigation
- High contrast mode
- Font size adjustment

### 25. **Performance Optimization**
- Image optimization
- Lazy loading
- Caching strategies
- CDN integration
- Performance monitoring

---

## 🎯 Priority Implementation Order

### Phase 1 (Core Features)
1. Dashboard with basic statistics
2. Tour Packages management
3. Bookings management
4. Customer management
5. Basic content management
6. User authentication and roles

### Phase 2 (Essential Features)
1. Services management (Car Rental, Hotel, etc.)
2. Destinations management
3. Payment integration
4. Invoice generation
5. Email notifications
6. Basic reports

### Phase 3 (Advanced Features)
1. Advanced analytics
2. Customer portal
3. Loyalty program
4. Review and rating system
5. Blog/News management
6. Promotions management

### Phase 4 (Enhancement Features)
1. Mobile app integration
2. Advanced communication system
3. Virtual tours
4. Social media integration
5. Advanced SEO tools
6. API and webhooks

---

## 📝 Notes

- All components should be standalone Angular components
- Use lazy loading for all feature modules
- Implement proper error handling and loading states
- Use reactive forms for all forms
- Implement proper validation
- Use TypeScript interfaces for type safety
- Follow Angular best practices and style guide
- Implement proper accessibility features
- Use responsive design for all components
- Implement proper security measures
- Use proper state management (Services + RxJS)
- Implement proper caching strategies
- Use proper error logging and monitoring

---

## 🔗 References

- Website: https://immanueltour.com/
- Angular Documentation: https://angular.io/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev/

---

**Last Updated**: 2024
**Version**: 1.0.0

