import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserList.css'; // Import the CSS for UserList

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Sort users alphabetically by name
        const sortedUsers = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setUsers(sortedUsers);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="users-page">
      <h1 className="page-header">List of Users</h1>
      <div className="users-container">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <Link to={`/user/${user.id}`}>
              <h3>{user.name}</h3>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
