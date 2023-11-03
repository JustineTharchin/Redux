import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'user' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Form />
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        <input type="text" name="password" value={formData.password} onChange={handleInputChange} />
        <select name="role" value={formData.role} onChange={handleInputChange}>
          <option value="user">Utilisateur</option>
          <option value="admin">Administrateur</option>
        </select>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
