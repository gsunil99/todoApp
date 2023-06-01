# Todo App Backend API [Live](https://gsunil-todo.netlify.app/)

This is the backend API for a Todo application built using Node.js. It provides endpoints to create, manage, and track tasks or to-do items. This README file provides an overview of the API and instructions on how to set it up and run it on your local machine.

## Features

-   User registration and authentication using JSON Web Tokens (JWT)
-   Create new tasks
-   Retrieve tasks by user
-   Update task status
-   Delete tasks

## Prerequisites

Before running the Todo App Backend API, ensure you have the following installed on your machine:

-   Node.js (v12 or higher)
-   npm (Node Package Manager)
-   MongoDB (Make sure it's running)

## Installation

1.  Clone the repository to your local machine using the following command:

`bash git clone https://github.com/gsunil99/todoApp.git` 

2.  Navigate to the project directory:

`cd todoApp` 

3.  Install the project dependencies:

`npm install` 

4.  Create a `config.env` file in the data folder of the project and configure the following environment variables:

PORT=3000
MONGO_URL=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key


## Usage

To start the Todo App Backend API, follow these steps:

1.  Run the development server:

`npm start` 

3.  The API will be running at `http://localhost:3000`.

## API Endpoints

### Authentication

-   `POST /api/v1/users/new` - Register a new user
-   `POST /api/v1/users/login` - User login and token generation

### Task Operations

-   `POST /api/v1/task/new` - Create a new task
-   `GET /api/v1/task/tasks` - Get all tasks for the authenticated user
-   `PUT /api/v1/task/:id` - Update the status of a task
-   `DELETE /api/v1/task/:id` - Delete a task

###  PostMan Collection
- Import the [postman collection](https://github.com/gsunil99/todoApp/blob/main/TodoNode.postman_collection.json) into your postman application
## Error Handling

The API implements proper error handling and returns meaningful error responses. In case of an error, the response will include an `error` field with the corresponding error message.

## Folder Structure

The folder structure of the Todo App Backend API is as follows:
```bash
todo-backend-api/
  ├── data/
  │   └── database.js
  ├── controllers/
  │   ├── task.js
  │   └── user.js
  ├── middleware/
  │   ├── auth.js
  │   └── error.js
  ├── models/
  │   ├── task.js
  │   └── user.js
  ├── routes/
  │   ├── task.js
  │   └── user.js
  ├── .gitignore
  ├── app.js
  ├── package.json
  ├── server.js
  └── README.md
 ```

-   The `controllers/` directory contains the logic for handling API requests and responses.
-   The `middleware/` directory contains custom middleware functions used in the API.
-   The `models/` directory contains the Mongoose models for the database schema.
-   The `routes/` directory contains the API route definitions.
-   The `.gitignore` file specifies which files and directories should be ignored by Git.
-   The `package.json` file lists the project dependencies and contains scripts to run the application.
-   The `server.js` file is the entry point of the application and sets up the server.
-   The `README.md` file provides information about the Todo App Backend API.

## Contributing

If you'd like to contribute to the development of the Todo App Backend API, please follow these guidelines:

1.  Fork the repository and clone it to your local machine.
2.  Create a new branch for your feature/bug fix.
3.  Make the necessary changes and test thoroughly.
4.  Commit your changes and push them to your forked repository.
5.  Submit a pull request describing your changes and improvements.


## Contact

If you have any questions, suggestions, or feedback, please feel free to contact the project maintainer at [gsunil99910@gmail.com](mailto:gsunil99910@gmail.com).
