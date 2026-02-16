# Task Manager Frontend

React-based frontend for the Task Manager application.

## Prerequisites
- Node.js 14+ 
- npm 6+

## Setup and Running

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm start
```

The frontend will start on `http://localhost:3000`

### 3. Build for production
```bash
npm build
```

## Project Structure
```
src/
├── components/        # React components
├── pages/            # Page components
├── services/         # API services
├── App.js           # Main App component
├── App.css          # Main styles
└── index.js         # Entry point
```

## Features
- View all tasks
- Create new tasks
- Update task status
- Delete tasks
- Task descriptions and timestamps

## Environment Variables
- `REACT_APP_API_URL` - Backend API URL (default: http://localhost:8080)
