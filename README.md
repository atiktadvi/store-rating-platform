# Store Rating Platform

A full-stack web application that allows users to submit and manage ratings for registered stores.

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MySQL

## Features

### System Administrator

* Add Users
* Add Store Owners
* Add Stores
* View Users
* Search and Sort Users
* View User Details
* Dashboard with Total Users, Stores and Ratings

### Normal User

* Signup and Login
* View Stores
* Search Stores
* Submit Ratings
* Update Ratings
* Change Password

### Store Owner

* Login
* View Store Average Rating
* View Users Who Submitted Ratings
* Change Password

## Authentication

* JWT Based Authentication
* Role Based Authorization
* Protected Routes

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
