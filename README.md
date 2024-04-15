# E-commerce App

## Overview
This project is an e-commerce REST API built using Node.js and Express.js, with MongoDB as the database. It includes user authentication and registration functionalities.

## Installation and Usage

1. **Installation**
   - Clone the repository: `git clone <repository_url>`
   - Navigate to the project directory: `cd ecommerce-app`
   - Install dependencies: `npm install`

2. **Usage**
   - Configure environment variables in a `.env` file.
   - Start the server: `npm start`

3. **API Endpoints**
   - `POST /api/v1/auth/register`: Register a new user.

4. **Testing**
   - Use Postman to test API requests and send data to MongoDB Compass for review and management.

## Dependencies and Tools
- bcrypt: ^5.1.1
- colors: ^1.4.0
- dotenv: ^16.4.5
- express: ^4.19.2
- mongoose: ^8.3.1
- morgan: ^1.10.0
- nodemon: ^3.1.0

## Integration and Data Sharing
After testing requests in Postman, follow these steps to send data to MongoDB Compass:

1. Open MongoDB Compass and ensure the MongoDB server is active.
2. Create a new database in MongoDB Compass.
3. For Postman requests, ensure the data is accurate and conforms to the MongoDB format.
4. Use the "Save Response" feature in Postman to save the request response.
5. In MongoDB Compass, select the appropriate database and document to store the data.
6. Click "Refresh" and upload the data from the Postman response to MongoDB Compass.

This process ensures that the data sent from Postman is accurately stored and managed in your MongoDB database. 


