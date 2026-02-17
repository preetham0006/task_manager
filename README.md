# Task Manager - Full Stack Application

A complete full-stack task manager web application built with **Spring Boot** (backend) and **React** (frontend).



### Prerequisites
- **Java 17+** and Maven for backend
- **Node.js 14+** and npm for frontend
- Git (optional)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies and build:
```bash
mvn clean install
```

3. Run the application:
```bash
mvn spring-boot:run
```

The backend will start on **http://localhost:8080**

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will start on **http://localhost:3000** and automatically open in your browser.

##  Features

 **Create Tasks** - Add new tasks with title and description
 **View Tasks** - See all your tasks in a clean interface
 **Mark Complete** - Check off tasks as you complete them
 **Delete Tasks** - Remove tasks you no longer need
 **Timestamps** - Auto-generated created and updated timestamps
 **Responsive Design** - Works on desktop and mobile devices
 **Real-time Updates** - Instant UI updates on data changes

##  Project Structure

```
fullstack/
├── backend/
│   ├── src/main/java/com/taskmanager/
│   │   ├── entity/           # JPA entities (Task)
│   │   ├── repository/       # Spring Data JPA repositories
│   │   ├── service/          # Business logic layer
│   │   ├── controller/       # REST API endpoints
│   │   └── dto/              # Data Transfer Objects
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── pom.xml               # Maven configuration
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/           # Page-level components
│   │   ├── services/        # API client services
│   │   ├── styles/          # CSS stylesheets
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── README.md
│
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🔌 API Endpoints

### Tasks Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks/{id}` | Get task by ID |
| PUT | `/api/tasks/{id}` | Update a task |
| DELETE | `/api/tasks/{id}` | Delete a task |

### Request/Response Format

**Create/Update Task:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00",
  "updatedAt": "2024-01-15T10:30:00"
}
```

##  Technologies Used

### Backend
- **Java 17** - Programming language
- **Spring Boot 3.2** - Web framework
- **Spring Data JPA** - Database abstraction
- **H2 Database** - In-memory database (dev)
- **MySQL** - Production database support
- **Lombok** - Boilerplate reduction
- **Maven** - Build tool

### Frontend
- **React 18** - UI library
- **Axios** - HTTP client
- **React Router** - Navigation
- **CSS3** - Styling
- **npm** - Package manager

##  Workflow

1. **Create Task**: User enters title and description in the form and clicks "Add Task"
2. **API Call**: Frontend sends POST request to backend
3. **Save**: Backend saves task to H2 database
4. **Response**: Backend returns created task with ID
5. **Update UI**: Frontend updates task list without page reload
6. **Display**: User sees task in the list, can mark complete or delete

##  Database Schema

### Tasks Table
```sql
CREATE TABLE tasks (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

##  Development Notes

- **CORS**: Backend is configured to accept requests from `http://localhost:3000`
- **API Base URL**: Frontend defaults to `http://localhost:8080`
- **H2 Console**: Access at `http://localhost:8080/h2-console` (dev only)
- **Hot Reload**: Both backend (DevTools) and frontend support hot reloading

##  Running in Production

### Backend
```bash
mvn clean package
java -jar target/task-manager-backend-1.0.0.jar
```

### Frontend
```bash
npm run build
# Deploy the build/ directory to a static hosting service
```

##  Future Enhancements

- [ ] User authentication and authorization
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Recurring tasks
- [ ] Dark mode
- [ ] Mobile app
- [ ] Cloud deployment

##  Contributing

Feel free to fork this project and submit pull requests for any improvements.

##  License

This project is open source and available under the MIT License.

##  Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

**Happy Task Managing! **
