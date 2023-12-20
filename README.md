# bookKeeping

# Bill Tracker App Documentation

## Overview

This Bill Tracker App is a React application designed to help users keep track of their financial transactions on a monthly and yearly basis. It includes features for adding new transactions, viewing transactions by month and year, and categorizing them into various types like expenses and income.

## Setup and Installation

1. **Environment Setup**: Ensure you have Node.js and npm installed.
2. **Clone the Repository**: Clone the source code to your local machine.
3. **Install Dependencies**: Run `npm install` to install the necessary dependencies.
4. **Environment Variables**: Set up the environment variables in a `.env` file including `REACT_APP_API_URL` for your backend API.

## Key Components

### Frontend (React)

- **React Router**: Used for routing between different views (Monthly, Yearly, and New Transaction).
- **Redux Toolkit**: Manages the application state, specifically for handling bills.
- **Ant Design Mobile**: Provides UI components like Buttons, DatePickers, Inputs, etc.
- **Axios**: For making API requests to the backend.

### Backend (Express with Prisma)

- **Express.js**: Backend framework for creating API endpoints.
- **Prisma**: ORM for interacting with the database, used to define and manage the `bill` model.
- **Cors & Morgan**: Middleware for enabling CORS and logging HTTP requests.

### Key Features

- **Add New Transactions**: Users can add new transactions specifying the type, amount, date, and purpose.
- **Monthly & Yearly Views**: Transactions can be viewed on a monthly and yearly basis.
- **Categorization**: Transactions are categorized into different types like food, taxi, income, etc.
- **Responsive Layout**: The app is responsive, ensuring a seamless experience across various devices.

## API Endpoints

### GET `/bill`

- Retrieves all bills from the database.

### POST `/bill`

- Adds a new bill to the database.
- Requires `type`, `money`, `date`, and `usedFor` in the request body.

## Database Schema

The `bill` model includes the following fields:

- `id`: Auto-incremented ID.
- `type`: Type of the bill (e.g., income, expense).
- `money`: Amount of money.
- `date`: Date of the transaction.
- `usedFor`: Description or purpose of the transaction.

## Running the Application

1. **Start the Backend Server**: Navigate to the backend directory and run `node server.js` to start the Express server.
2. **Start the React App**: Run `npm start` in the root directory to launch the React application.

## Additional Notes

- Make sure the backend API is running and accessible for the frontend to function correctly.
- Customize the UI and features as per your requirements by modifying the respective React components and Redux slices.

This documentation provides a basic overview and setup guide for the Bill Tracker App. For further customization and development, refer to the React, Redux Toolkit, and Prisma documentation.