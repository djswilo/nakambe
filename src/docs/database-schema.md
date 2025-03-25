
# Nakambe Centre Database Schema

This document outlines the database structure for the Nakambe Centre application.

## Database Name: Nakambe

## Tables

### 1. users
Stores user account information for all system users.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| email | varchar | User's email address, unique |
| password | varchar | Hashed password (managed by Supabase Auth) |
| full_name | varchar | User's full name |
| phone | varchar | User's phone number |
| role | enum | 'admin', 'staff', 'user' |
| created_at | timestamp | Account creation timestamp |
| updated_at | timestamp | Last update timestamp |

**RLS Policies:**
- Users can read their own data
- Admins can read all user data
- Users can update their own data
- Admins can update any user data

### 2. profiles
Extended user profile information.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, references users.id |
| address | varchar | User's physical address |
| city | varchar | User's city |
| province | varchar | User's province |
| postal_code | varchar | User's postal code |
| bio | text | Brief description about the user |
| avatar_url | varchar | URL to user's profile picture |
| preferences | jsonb | User preferences and settings |
| created_at | timestamp | Profile creation timestamp |
| updated_at | timestamp | Last update timestamp |

**RLS Policies:**
- Users can read their own profile
- Admins and staff can read all profiles
- Users can update their own profile
- Admins can update any profile

### 3. children
Information about children registered for aftercare.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| parent_id | uuid | References users.id |
| first_name | varchar | Child's first name |
| last_name | varchar | Child's last name |
| date_of_birth | date | Child's date of birth |
| gender | varchar | Child's gender |
| school | varchar | Child's school |
| grade | varchar | Child's grade |
| medical_notes | text | Special medical notes or conditions |
| emergency_contact | varchar | Emergency contact information |
| created_at | timestamp | Registration timestamp |
| updated_at | timestamp | Last update timestamp |

**RLS Policies:**
- Parents can read their own children's data
- Admins and staff can read all children data
- Parents can update their own children's data
- Admins and staff can update any child's data

### 4. bookings
Records of session bookings.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| user_id | uuid | References users.id |
| child_id | uuid | References children.id (optional) |
| service_id | uuid | References services.id |
| booking_date | date | Date of booking |
| start_time | time | Start time of booking |
| end_time | time | End time of booking |
| status | enum | 'pending', 'confirmed', 'cancelled', 'completed' |
| notes | text | Special requests or notes |
| created_at | timestamp | Booking creation timestamp |
| updated_at | timestamp | Last update timestamp |

**RLS Policies:**
- Users can read their own bookings
- Admins and staff can read all bookings
- Users can create and update their own bookings
- Admins and staff can update any booking

### 5. services
Available services offered by Nakambe Centre.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| name | varchar | Service name |
| description | text | Detailed description |
| category | varchar | Service category |
| duration | integer | Standard duration in minutes |
| price | decimal | Price (if applicable) |
| is_active | boolean | Whether service is currently offered |
| created_at | timestamp | Service creation timestamp |
| updated_at | timestamp | Last update timestamp |

**RLS Policies:**
- Everyone can read active services
- Only admins can create, update, or delete services

### 6. documents
Stores medical documents and referrals.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| user_id | uuid | References users.id |
| child_id | uuid | References children.id (optional) |
| name | varchar | Document name/title |
| type | varchar | Document type (medical, referral, etc.) |
| file_path | varchar | Path to file in storage |
| file_size | integer | Size of file in bytes |
| mime_type | varchar | MIME type of document |
| status | enum | 'pending', 'approved', 'rejected' |
| notes | text | Additional notes about document |
| created_at | timestamp | Upload timestamp |
| updated_at | timestamp | Last update timestamp |

**RLS Policies:**
- Users can read their own documents
- Admins and staff can read all documents
- Users can upload documents for themselves or their children
- Only admins and staff can update document status

### 7. payments
Records of payments for services.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| user_id | uuid | References users.id |
| booking_id | uuid | References bookings.id (optional) |
| amount | decimal | Payment amount |
| currency | varchar | Currency (ZAR) |
| status | enum | 'pending', 'completed', 'failed', 'refunded' |
| payment_method | varchar | Method of payment |
| transaction_id | varchar | External transaction ID |
| notes | text | Payment notes |
| created_at | timestamp | Payment timestamp |
| updated_at | timestamp | Last update timestamp |

**RLS Policies:**
- Users can read their own payments
- Admins can read all payments
- Only the system can create payment records
- Only admins can update payment status

### 8. volunteers
Volunteer information and applications.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| user_id | uuid | References users.id (optional) |
| full_name | varchar | Volunteer's full name |
| email | varchar | Volunteer's email |
| phone | varchar | Volunteer's phone |
| skills | text[] | Array of skills/areas of interest |
| availability | jsonb | Availability times/days |
| status | enum | 'applied', 'approved', 'active', 'inactive' |
| notes | text | Additional notes |
| created_at | timestamp | Application timestamp |
| updated_at | timestamp | Last update timestamp |

**RLS Policies:**
- Users can read their own volunteer applications
- Admins and staff can read all volunteer data
- Anyone can create a volunteer application
- Admins can update volunteer status

### 9. notifications
System notifications for users.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| user_id | uuid | References users.id |
| title | varchar | Notification title |
| message | text | Notification message |
| type | varchar | Notification type (booking, payment, etc.) |
| is_read | boolean | Whether notification has been read |
| reference_id | uuid | Optional reference to related entity |
| created_at | timestamp | Notification timestamp |

**RLS Policies:**
- Users can read their own notifications
- Users can mark their notifications as read
- Only the system can create notifications

## Database Rules

1. **Row Level Security (RLS)**:
   - All tables must have RLS policies enabled
   - No public access to any table without authentication
   - Data access limited to user's own data or authorized roles

2. **Cascading Deletes**:
   - Child records should be deleted when parent records are deleted
   - Example: When a user is deleted, their profiles, bookings, and documents should be deleted

3. **Data Validation**:
   - Email formats should be validated
   - Phone numbers should follow South African format
   - Required fields should be enforced

4. **Logging and Auditing**:
   - All tables include created_at timestamp
   - All tables with updatable data include updated_at timestamp
   - Critical operations should be logged in a separate audit table

5. **Indexing**:
   - Foreign keys should be indexed
   - Frequently queried columns should be indexed
   - Composite indexes for common query patterns

## Security Rules

1. The database should only be accessible via the Supabase API using authenticated requests
2. Database credentials should never be exposed in client-side code
3. All personally identifiable information (PII) should be handled according to POPIA regulations
4. User passwords are never stored directly, only securely hashed by Supabase Auth
5. Database backups should be performed regularly and stored securely
