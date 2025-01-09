# Booking App

A hotel booking app made with Nodejs, Reactjs, Expressjs, MongoDB, TailwindCSS and cloudinary.

## Features

- Authentication with JWT.
- Users can search for hotels with additional filters.
- Allows addition and editing of hotels.

## Tech Stack

- Nodejs
- Reactjs
- Expressjs
- MongoDB
- TailwindCSS
- Cloudinary (for image storage)

## Prerequisites

Before you begin, make sure to have Node.js installed in your system.

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Jaya-Krishna-07/booking-app.git```

2. install dependencies:
```bash
cd backend && npm install```
```bash
cd frontend && npm install```

note: The backend runs on port 3000 and the frontend runs on port 4000.

3. .env files
- Make one .env file in the backend/ and frontend/ folders each.
- In the .env file in backend/ , add MONGODB_CONNECTION_STRING( the connection string to connect to your MongoDB account), FRONTEND_URL(the url of your frontend app), JWT_SECRET_KEY(a random secret key), the following can be found in your cloudinary dashboard CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.
- In the frontend/ , VITE_API_BASE_URL, which is the url of your backend.

4. start the app
- To start the backend:
```bash
cd backend && npm run dev```
- To start the frontend:
```bash
cd frontend && npm run dev```
