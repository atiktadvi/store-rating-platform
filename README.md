# Store Rating Platform

A full-stack web application that allows users to discover stores, submit ratings, and manage feedback through a secure role-based access system.

## Overview

The Store Rating Platform provides a centralized system where users can rate stores on a scale of 1 to 5. The platform supports three different user roles: Administrator, Store Owner, and Normal User. Each role has access to specific features and dashboards.

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MySQL

---

## User Roles

### Administrator

* Secure Login
* Dashboard Overview
* Add Users
* Add Administrators
* Add Store Owners
* Add Stores
* View All Users
* Search and Sort Users
* View User Details
* View Store Listings
* Change Password
* Logout

### Normal User

* User Registration
* Secure Login
* Browse Stores
* Search Stores
* Submit Ratings (1–5)
* Update Ratings
* Change Password
* Logout

### Store Owner

* Secure Login
* View Store Rating Summary
* View Users Who Submitted Ratings
* Change Password
* Logout

---

## Key Features

* JWT Based Authentication
* Role-Based Authorization
* Protected Routes
* Secure Password Hashing
* Store Search Functionality
* Rating Management System
* Dashboard Analytics
* User Management
* Responsive User Interface

---

## Project Structure

```text
store-rating-platform
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
│   └── package.json
│
└── README.md
```

---

## Installation

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Functional Modules

### Authentication Module

* Login
* Registration
* Password Management
* JWT Token Verification

### Store Management Module

* Add Stores
* View Stores
* Search Stores
* Store Rating Display

### Rating Module

* Submit Ratings
* Update Ratings
* Calculate Average Ratings

### User Management Module

* Add Users
* View Users
* Search Users
* Sort Users
* View User Details

---

## Security Features

* Password Encryption using bcrypt
* JWT Authentication
* Protected API Routes
* Role-Based Access Control

