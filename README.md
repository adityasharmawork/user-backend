# User Management System (Backend)
## Project Overview
This project is a User Management System built using Node.js, Express.js, and MongoDB. It provides a simple backend API to register users, authenticate them using JWT tokens, and allows searching of user details based on their username or email.

This project is intended to demonstrate how to build a user registration and authentication system using modern technologies and practices.

## Features
User Registration: Register a new user with details like username, password, full name, gender, date of birth, and country.
User Login: Authenticate users using JWT tokens for secure login.
Search User: Search users by username or email to retrieve their full information.
JWT Authentication: Use of JWT tokens for managing authentication and protecting routes.
Data Validation: Server-side validation using Zod to ensure the integrity of the data submitted.
Security: Secure password storage using bcryptjs hashing and validation for each API request.

## Tech Stack
Backend Framework: Express.js (Node.js)
Database: MongoDB (NoSQL Database)
Authentication: JWT (JSON Web Tokens)
Password Hashing: bcryptjs
Validation: Zod

## Setup & Installation
To get the project up and running on your local machine, follow these steps:

1. Clone the Repository

git clone [https://github.com/your-username/user-management-backend.git](https://github.com/adityasharmawork/user-backend]
cd user-backend

2. Install Dependencies
Install the required dependencies using npm (make sure you have Node.js installed).
npm install

3. Set Up Environment Variables
Create a .env file in the root directory and define the following environment variables:

MONGODB_URI=mongodb://localhost:27017/userdb      # MongoDB connection URI
JWT_SECRET=your_jwt_secret_key                    # Secret key for JWT token
PORT=5000                                          # Port where the app will run

4. Start the Application
Start the Express server:

npm start
The server will run on http://localhost:port by default.

## API Endpoints

1. User Registration
URL: /api/auth/register
Method: POST

2. User Login
URL: /api/auth/login
Method: POST

3. Search User
URL: /api/user/search
Method: GET


## Explanation of File Structure:
src/config/db.js: MongoDB connection setup.
src/controllers/: Contains the business logic for handling user registration, login, and search.
src/middleware/: Contains middleware for authentication (JWT) and data validation.
src/models/: Contains Mongoose schema definitions, including the userModel.js file.
src/routes/: Contains API routes for registration, login, and user search.
src/utils/: Contains utility functions such as the function for generating JWT tokens.

# Security Features
## 1. JWT Authentication
JWT Tokens are used for authenticating users. After successful login, a token is generated and returned, which must be sent with subsequent requests to access protected routes.

## 2. Password Hashing
User passwords are hashed using bcryptjs before being stored in the database. This ensures that even if the database is compromised, passwords are not exposed in plain text.

## 3. Zod Validation
Zod is used for data validation on the server-side. This helps in ensuring that only valid data is processed, preventing common security vulnerabilities like SQL injection or data corruption.

## 4. Environment Variables
Sensitive information like MongoDB URI and JWT_SECRET are stored in environment variables (.env file) instead of hardcoding them in the application.


# How the Application Works
## User Registration:

The user submits their details (username, password, full name, gender, date of birth, and country) via the POST /api/auth/register endpoint.
The server validates the data using Zod and then hashes the password using bcrypt before saving the user details in the database.

## User Login:

The user provides their username and password via the POST /api/auth/login endpoint.
The server checks if the user exists, and compares the password with the hashed one stored in the database. If successful, a JWT token is generated and sent back to the client.

## Search User:

The client can search for a user by username or email using the GET /api/user/search endpoint.
The query is passed as a parameter, and the server retrieves and returns the corresponding user details (excluding the password).
