# User Management API

## Description
This is a simple Node.js backend API for user management. It includes controllers for registering, logging in, updating, retrieving, and deleting users. JWT authentication is implemented to protect certain routes, ensuring only authenticated users can access them.

## Features
- Register and login users with password hashing (bcryptjs)
- Update user info (protected route)
- Retrieve all users (excluding passwords)
- Delete users
- JWT-based authentication middleware

## Technologies
- Node.js
- Express
- MongoDB & Mongoose
- bcryptjs
- jsonwebtoken
- Postman (for testing)

## How to Run
1- Clone the repository  
2- Install dependencies: `npm install`  
3- Set environment variables (e.g., `JWT_SECRET`)  
4- Run the server: `npm start`  
5- Test endpoints using Postman
