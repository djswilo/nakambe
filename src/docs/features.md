
# Nakmabe Centre Website Features

This document outlines all the features currently implemented on the Nakmabe Centre website, organized by page and section.

## Global Features

- **Responsive Design**: All pages are fully responsive and work on mobile, tablet, and desktop devices
- **Navigation**: Main navigation menu with links to all primary pages
- **Floating Contact Button**: Fixed button in bottom-right corner for quick access to contact information
- **Authentication**: User login/signup functionality (UI implemented, backend pending Supabase integration)

## Pages & Sections

### Home Page (`src/pages/Index.tsx`)

- **Hero Section** (`src/components/HeroSection.tsx`)
  - Large banner with headline, subheading, and call-to-action buttons
  - Background image showcasing the Centre's activities
  
- **Features Section** (`src/components/FeaturesSection.tsx`)
  - Grid of key programs and services offered
  - Icons and brief descriptions for each feature
  
- **CTA (Call to Action) Section**
  - Encouragement to get in touch or learn more
  - Button linking to contact page

### About Page (`src/pages/About.tsx`)

- **About Hero Section**
  - Banner with "Who We Are" headline
  - Brief introduction to the organization
  
- **Mission & Vision Section**
  - Organization's mission statement
  - Vision for community impact
  
- **History Section**
  - Information about when and how the Centre was established
  - Timeline of key developments
  
- **Values Section**
  - Core values of the organization displayed in card format

### Services/Programs Page (`src/pages/Services.tsx`)

- **Services Hero Section** (`src/components/services/ServicesHero.tsx`)
  - Banner with "Our Programmes" headline
  - Overview of program types
  
- **Programs Grid** (`src/components/services/ProgramsGrid.tsx`)
  - Grid layout displaying all programs
  - Each program in a separate card (`src/components/services/ProgramCard.tsx`)
  
- **Services CTA Section** (`src/components/services/ServicesCTA.tsx`)
  - Call to action encouraging engagement with programs
  - Contact button for inquiries

### Contact Page (`src/pages/Contact.tsx`)

- **Contact Hero Section**
  - Banner with "Get In Touch" headline
  - Brief intro explaining how to contact the Centre
  
- **Contact Info Cards**
  - Cards displaying address, phone, email, and business hours
  - Icons for visual identification
  
- **Google Map** (`src/components/contact/GoogleMap.tsx`)
  - Embedded Google Map showing the Centre's location
  
- **Contact Form** (`src/components/ContactForm.tsx`)
  - Form for sending messages to the Centre
  - Fields for name, email, phone, subject, and message
  - Form validation and submission feedback
  
- **FAQ Section**
  - Frequently asked questions about the Centre's services
  - Expandable questions with answers

### Authentication Pages

- **Sign In Dialog** (Modal, accessed from Navbar)
  - Email/Password login form
  - Social login options (UI only, backend pending)
  - Password reset link
  
- **Registration Page** (`src/pages/auth/Register.tsx`)
  - New user registration form
  - Fields for name, email, password
  - Terms of service agreement
  - Social signup options (UI only, backend pending)

### Dashboard Page (`src/pages/dashboard/Dashboard.tsx`)

- **Overview Tab**
  - Quick stats on bookings, registered children, and documents
  - Recent activity list
  
- **Bookings Tab**
  - Interface for booking 60-minute sessions (UI only)
  
- **Children Tab**
  - Interface for registering children for aftercare (UI only)
  
- **Documents Tab**
  - Interface for uploading medical documents and referrals (UI only)

## Components

### Layout Components

- **Navbar** (`src/components/Navbar.tsx`)
  - Main navigation menu
  - Mobile-responsive collapsible menu
  - User sign-in button and authentication dialog
  
- **Footer** (`src/components/Footer.tsx`)
  - Organization contact information
  - Social media links
  - Copyright information
  
- **PageTransition** (`src/components/PageTransition.tsx`)
  - Smooth page transition animations
  - Uses Framer Motion for animation effects

### UI Components

- **ProgramCard** (`src/components/services/ProgramCard.tsx`)
  - Card component for displaying program information
  - Title, description, icon, and action button
  
- **ContactForm** (`src/components/ContactForm.tsx`)
  - Form for sending messages
  - Input validation and submission handling
  
- **GoogleMap** (`src/components/contact/GoogleMap.tsx`)
  - Embedded Google Maps component
  
- **FloatingContactButton** (`src/components/FloatingContactButton.tsx`)
  - Fixed button that appears on all pages
  - Quick access to contact page
  
- **LoginForm** (`src/components/auth/LoginForm.tsx`)
  - Form for user authentication
  - Social login options

## Future Features (Planned for Supabase Integration)

- **User Authentication Backend**
  - Complete Supabase auth integration
  - User roles and permissions (admin/staff/user)
  
- **Booking System**
  - Calendar-based booking for 60-minute sessions
  - Confirmation and reminders
  
- **Aftercare Management**
  - Child registration and management
  - Attendance tracking
  
- **Document Management**
  - Upload and manage medical documents
  - Secure storage and retrieval
  
- **Payment Integration**
  - Process payments for services
  - Payment history and receipts
  
- **Admin Dashboard**
  - Manage users, bookings, and programs
  - Analytics and reporting
