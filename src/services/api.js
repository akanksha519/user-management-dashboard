const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch users from the API
export const fetchUsers = () =>
  fetch(`${BASE_URL}/users`)
    .then((response) => response.json()) // Convert the response to JSON
    .catch((error) => {
      throw new Error("Failed to fetch users");
    });
// Example API call for adding user
export const addUser = async (user) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// Example API call for updating user
export const updateUser = async (user) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Example API call for deleting user
export const deleteUser = async (userId) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
