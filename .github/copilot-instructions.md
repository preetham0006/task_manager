# Task Manager Full-Stack Project

## Project Overview
Full-stack task manager application with Spring Boot backend and React frontend.

## Technologies
- **Backend**: Java, Spring Boot, Spring Data JPA, H2/MySQL Database
- **Frontend**: React JS, Axios, React Router

## Setup Instructions

### Backend Setup
1. Navigate to `backend` folder
2. Run `mvn clean install`
3. Run `mvn spring-boot:run`
4. Backend runs on `http://localhost:8080`

### Frontend Setup
1. Navigate to `frontend` folder
2. Run `npm install`
3. Run `npm start`
4. Frontend runs on `http://localhost:3000`

## Project Structure
```
fullstack/
├── backend/          # Spring Boot application
├── frontend/         # React application
└── .github/
    └── copilot-instructions.md
```

## API Endpoints
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/{id}` - Get task by ID
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task

## Development Status
Setup and scaffolding in progress...
