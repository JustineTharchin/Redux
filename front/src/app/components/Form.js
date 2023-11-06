import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';

function Form() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'user' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    fetch('http://localhost:3001/users/create', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Email" variant="outlined" name="email" value={formData.email} onChange={handleInputChange} fullWidth />
      <TextField label="Password" variant="outlined" name="password" value={formData.password} onChange={handleInputChange} fullWidth />
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Role</InputLabel>
        <Select label="Role" name="role" value={formData.role} onChange={handleInputChange}>
          <MenuItem value="user">Utilisateur</MenuItem>
          <MenuItem value="admin">Administrateur</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Envoyer
      </Button>
    </form>
  );
}

export default Form;
