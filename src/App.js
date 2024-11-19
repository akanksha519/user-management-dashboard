import React, { useState, useEffect } from "react";
import UserList from "./components/UserList"; // User list display
import UserForm from "./components/UserForm"; // Form for adding/editing users
import { fetchUsers, addUser, updateUser, deleteUser } from "./services/api"; // API calls

import "./styles/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // State to track the user being edited

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    getUsers();
  }, []);

  // Handle saving a new or edited user
  const handleSave = async (user) => {
    console.log("Saving User:", user);

    try {
      if (user.id) {
        // Updating existing user
        const updatedUser = await updateUser(user);
        console.log("Updated User:", updatedUser);

        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
      } else {
        // Adding new user
        const newUser = await addUser(user);
        console.log("New User Added:", newUser);

        setUsers((prevUsers) => [...prevUsers, newUser]);
      }

      setEditingUser(null); // Close the form after saving
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Handle editing an existing user
  const handleEdit = (user) => {
    setEditingUser(user); // Open form with the current user data
  };

  // Handle deleting a user
  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId); // Delete user via API
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  // Handle adding a new user (open empty form)
  const handleAdd = () => {
    setEditingUser({ id: "", name: "", email: "", company: "" });
  };

  return (
    <div>
      <h1>User Management Dashboard</h1>
      {editingUser ? (
        <UserForm
          user={editingUser}
          onSave={handleSave}
          onCancel={() => setEditingUser(null)}
        />
      ) : (
        <UserList
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default App;
