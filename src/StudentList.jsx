import React, { useState } from 'react';

const StudentList = () => {
 
  const [users, setUsers] = useState([
    { id: 1, name: 'thomas', age: 25 },
    { id: 2, name: 'Eskndr', age: 30 },
    { id: 3, name: 'nahom', age: 35 },
  ]);

  
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: '', age: '' });

  
  const startEditing = (user) => {
    setEditingUserId(user.id);
    setEditedUser({ name: user.name, age: user.age });
  };

  
  const saveChanges = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, ...editedUser } : user
      )
    );
    setEditingUserId(null); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value, 10) || '' : value,
    }));
  };

  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>    
            {editingUserId === user.id ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                />
                <input
                  type="number"
                  name="age"
                  value={editedUser.age}
                  onChange={handleInputChange}
                  placeholder="Age"
                />
                <button onClick={() => saveChanges(user.id)}>Save</button>
                <button onClick={() => setEditingUserId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>
                  {user.name}, {user.age} years old
                </span>
                <button onClick={() => startEditing(user)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
