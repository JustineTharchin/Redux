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
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Email" variant="outlined" value={formData.email} onChange={handleInputChange} fullWidth />
      <TextField label="Password" variant="outlined" value={formData.password} onChange={handleInputChange} fullWidth />
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Role</InputLabel>
        <Select label="Role" name="role" value={formData.role} onChange={handleInputChange}>
          <MenuItem value="user">Utilisateur</MenuItem>
          <MenuItem value="admin">Administrateur</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">Envoyer</Button>
    </form>
  );
}

export default Form;
