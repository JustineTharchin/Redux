import React from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';

function Form() {
  return (
    <form>
      <TextField label="Email" variant="outlined" fullWidth />
      <TextField label="Password" variant="outlined" fullWidth />
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Role</InputLabel>
        <Select label="Role">
          <MenuItem value="user">Utilisateur</MenuItem>
          <MenuItem value="admin">Administrateur</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">Envoyer</Button>
    </form>
  );
}

export default Form;
