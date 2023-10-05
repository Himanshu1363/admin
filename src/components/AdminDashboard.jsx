// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1 className='text-center text-2xl'>Admin Dashboard</h1>
      <table className=''>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody >
          {users.map(user => (
            <tr key={user.id} className='bg-red-200' >
              <td >{user.id}</td>
              <td className='px-3'>{user.name}</td>
              <td>{user.email}</td>
              <td className='px-3'>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
