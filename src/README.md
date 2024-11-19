# User Management Application

This is a simple React application that allows users to view, add, edit, and delete user details from a mock backend API (JSONPlaceholder).

## Features
- View a list of users with their ID, Name, Email, and Department.
- Add new users with details such as Name, Email, and Department.
- Edit existing user details.
- Delete users from the list.
- Simple form validation and error handling.

## Technologies Used
- **React**: For building the user interface.
- **JSONPlaceholder API**: For mock backend functionality (used to simulate adding, editing, and deleting users).
- **CSS**: For styling the application.

## Getting Started

To get started with the project, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/user-management-app.git



##Folder Structure


/src
  /components
    - UserList.js           # Displays list of users
    - UserForm.js           # Form for adding/editing users
  /services
    - api.js                # API functions for fetching, adding, editing, and deleting users
  App.js                    # Main component that holds the logic for the app
  index.js                  # Entry point for the React app
  App.css                   # Global CSS for styling
  index.css                 # Basic CSS styles
