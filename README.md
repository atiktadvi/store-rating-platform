# Store Rating Platform

A full-stack web application that allows users to register, log in, browse stores, and submit ratings. The platform supports role-based access for Administrators, Normal Users, and Store Owners.

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

## Features

### System Administrator

* Secure Login
* Dashboard Overview

  * Total Users
  * Total Stores
  * Total Ratings
* Add New Users
* Add New Store Owners
* Add New Administrators
* Add New Stores
* View All Users
* Search Users
* Sort Users
* View User Details
* View Store Listings
* Change Password
* Logout

### Normal User

* User Registration
* Secure Login
* Browse Stores
* Search Stores by Name
* Search Stores by Address
* View Overall Store Ratings
* Submit Ratings (1–5)
* Update Submitted Ratings
* Change Password
* Logout

### Store Owner

* Secure Login
* View Store Average Rating
* View Users Who Submitted Ratings
* Change Password
* Logout

---

## Authentication & Security

* JWT Based Authentication
* Password Hashing using bcryptjs
* Role-Based Authorization
* Protected Routes
* Secure Password Management

---

## Project Structure

```text
store-rating-app
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── assets
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/atiktadvi/store-rating-platform.git
cd store-rating-platform
```

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

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=store_rating

JWT_SECRET=your_secret_key
```

---

## Database

Database Used: **MySQL**

Create a database:

```sql
CREATE DATABASE store_rating;
```

Import the required tables and run the backend server.

---

## Validation Rules

* Name: Minimum 20 characters, Maximum 60 characters
* Address: Maximum 400 characters
* Password:

  * 8–16 characters
  * At least one uppercase letter
  * At least one special character
* Email:

  * Standard email format validation


