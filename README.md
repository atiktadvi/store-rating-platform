# Store Rating Platform

A full-stack web application that enables users to browse stores, submit ratings, and manage feedback through a secure role-based system.

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

* Manage users and stores
* Add Admins, Store Owners, and Users
* View and search users
* View store listings
* Dashboard with:

  * Total Users
  * Total Stores
  * Total Ratings

### Normal User

* Register and Login
* Browse stores
* Search stores
* Submit ratings (1–5)
* Update ratings
* Change password

### Store Owner

* Login securely
* View average store rating
* View users who submitted ratings
* Change password

---

## Features

* JWT Based Authentication
* Role-Based Authorization
* Protected Routes
* Password Encryption using bcrypt
* Store Search Functionality
* Rating Management System
* User Management
* Dashboard Analytics
* Responsive Interface

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
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```





