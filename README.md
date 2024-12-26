# REST API Project

This project is a web application that includes a REST API built with Prisma, TypeScript, and Express.js on the backend, and a frontend built with Vue.js 3.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Overview

This project aims to provide a scalable and maintainable full-stack web application with a RESTful API. The backend is powered by Prisma ORM, TypeScript, and Express.js, while the frontend is created using Vue.js 3.

## Features

- User authentication and authorization
- CRUD operations for various resources
- Responsive and dynamic frontend UI
- Seamless integration with Prisma for database management
- TypeScript for enhanced code quality and developer experience

## Technologies Used

### Backend

- **Prisma**: Next-generation ORM for database management
- **TypeScript**: Strongly typed programming language that builds on JavaScript
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js

### Frontend

- **Vue.js 3**: Progressive JavaScript framework for building user interfaces

## Installation

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn

### Steps

1. **Clone the repository:**
    ```sh
    git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/JermineJunior/ts-prisma-api)
    cd your-repo-name
    ```

2. **Install dependencies:**

    - For the backend:
    ```sh
    cd backend
    npm install
    # or
    yarn install
    ```

    - For the frontend:
    ```sh
    cd ../frontend
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**

    - Create a `.env` file in the `backend` directory and configure the necessary environment variables, such as the database connection string.

4. **Run database migrations:**
    ```sh
    cd backend
    npx prisma migrate dev --name init
    ```

## Usage

### Backend

1. **Start the development server:**
    ```sh
    cd backend
    npm run dev
    # or
    yarn dev
    ```

    The backend server will be running on `http://localhost:8080`.

### Frontend

1. **Start the development server:**
    ```sh
    cd frontend
    npm run serve
    # or
    yarn serve
    ```

    The frontend server will be running on `http://localhost:3000`.

## Project Structure

```plaintext
your-repo-name/
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   └── main.js
│   └── package.json
├── .gitignore
├── README.md
└── package.json
