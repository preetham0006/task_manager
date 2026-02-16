# Task Manager Backend

Spring Boot REST API for the Task Manager application.

## Prerequisites
- Java 17 or higher
- Maven 3.6+

## Setup and Running

### 1. Build the project
```bash
mvn clean install
```

### 2. Run the application
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

## API Endpoints

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/{id}` - Get task by ID
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task

## Project Structure
```
src/
├── main/
│   ├── java/com/taskmanager/
│   │   ├── TaskManagerApplication.java
│   │   ├── entity/
│   │   ├── repository/
│   │   ├── service/
│   │   ├── controller/
│   │   └── dto/
│   └── resources/
│       └── application.properties
└── test/
```

## Database
- H2 (in-memory) for development
- MySQL for production (configure in application.properties)
