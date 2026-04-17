#  Vehicle Rental System

🔗 **Live Link:** https://vehicle-rental-system-a2.onrender.com
🔗 **GitHub Repository:** https://github.com/Mokarama/Vehicle_Rental_System_A2

---

##  Project Overview

The Vehicle Rental System is a backend API built with Node.js, Express, and PostgreSQL.
It allows users to register, log in, and book vehicles easily. The system also supports role-based access where admin users can manage vehicles and bookings.

This project focuses on building a structured REST API with authentication and database integration.

---

##  Technology Stack

* Node.js
* Express.js
* TypeScript
* PostgreSQL (Neon Database)
* JWT (JSON Web Token)
* bcryptjs (Password Hashing)
* Render (Deployment)

---

##  Features

* User registration and login system
* JWT-based authentication
* Role-based authorization (Admin & Customer)
* Vehicle management system
* Booking system with automatic price calculation
* Secure password storage using hashing
* Protected API routes

---

##  API Endpoints

###  Authentication

* POST `/api/v1/auth/signup` → Register user
* POST `/api/v1/auth/signin` → Login user

---

###  Users

* GET `/api/v1/users` → Get all users

---

###  Vehicles

* GET `/api/v1/vehicles` → Get all vehicles
* POST `/api/v1/vehicles` → Create vehicle
* GET `/api/v1/vehicles/:id` → Get single vehicle
* PUT `/api/v1/vehicles/:id` → Update vehicle
* DELETE `/api/v1/vehicles/:id` → Delete vehicle

---

###  Bookings

* POST `/api/v1/bookings` → Create booking
* GET `/api/v1/bookings` → Get bookings
* PUT `/api/v1/bookings/:bookingId` → Update booking

---

##  Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/Mokarama/Vehicle_Rental_System_A2.git
cd Vehicle_Rental_System_A2
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create a `.env` file

Create a `.env` file in the root directory and add:

```
PORT=4000
CONNECTION_STR=your_postgresql_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Run the project

```
npm run dev
```

---

## 🧪 Testing

You can test the API using:

* Thunder Client
* Postman

---

##  Deployment

The project is deployed on **Render** and uses **Neon PostgreSQL Database**.

---

##  Important Notes

* Make sure the database connection string is valid
* JWT token is required for protected routes
* Database tables are automatically created on server start

---

##Author

Developed by **Mokarama Akter**
