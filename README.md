# Digital Banking Ledger Backend

## Overview

A RESTful backend that simulates a digital banking system using a
**ledger-based architecture**. Instead of directly updating account
balances, every money movement is stored as immutable **debit** and
**credit** ledger entries, and balances are computed from those entries.

## Features

-   User registration, login, and logout
-   JWT authentication
-   Password hashing with bcrypt
-   Account creation
-   Ledger-based balance calculation
-   Money transfers
-   MongoDB transactions/sessions for atomic transfers
-   Idempotency keys to prevent duplicate transactions
-   Email notifications using Nodemailer
-   Token blacklist for secure logout

## Tech Stack

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT
-   bcrypt
-   Nodemailer

## Project Structure

    backend/
     ├── server.js
     ├── src/
     │   ├── app.js
     │   ├── config/
     │   ├── controllers/
     │   ├── middlewares/
     │   ├── models/
     │   ├── routes/
     │   └── services/
     └── .env

## Architecture

    Client
       |
    Express
       |
    Routes
       |
    Middleware
       |
    Controllers
       |
    Models (Mongoose)
       |
    MongoDB

## Workflow

1.  Register/Login
2.  Authenticate using JWT
3.  Create account
4.  System initializes funds (optional)
5.  Transfer money
6.  Create debit and credit ledger entries
7.  Commit transaction
8.  Calculate balance from ledger
9.  Send email notification

## Database Models

-   User
-   Account
-   Ledger
-   Transaction
-   BlacklistToken

## API Endpoints

### Auth

-   POST `/api/auth/register`
-   POST `/api/auth/login`
-   POST `/api/auth/logout`

### Accounts

-   POST `/api/accounts`
-   GET `/api/accounts`
-   GET `/api/accounts/balance/:accountId`

### Transactions

-   POST `/api/transactions`
-   POST `/api/transactions/system/initial-funds`

## Why Ledger?

Traditional systems update balances directly. This project records every
transaction as immutable ledger entries, providing: - Auditability -
Data integrity - Easier reconciliation - Reliable financial history

## Running the Project

``` bash
npm install
npm start
```

Create a `.env` file with:

    MONGO_URI=
    JWT_SECRET=
    EMAIL_USER=
    CLIENT_ID=
    CLIENT_SECRET=
    REFRESH_TOKEN=

## Future Improvements

-   Redis caching
-   Rate limiting
-   Docker support
-   CI/CD
-   Unit and integration tests
-   Structured logging
-   Monitoring and metrics

## Author

Prepared as a backend engineering project demonstrating authentication,
transactional integrity, and ledger-based financial workflows.
