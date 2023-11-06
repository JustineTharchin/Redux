const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const rawData = fs.readFileSync('database.json');
const database = JSON.parse(rawData);
const users = database.users;

app.use(bodyParser.json());
app.use(cors());

app.options('/users/create', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).end();
});

app.get('/', (req, res) => {
  const response = {
    success: true,
    message: 'Liste des utilisateurs récupérée avec succès.',
    users: users,
  };
  res.json(response);
});


app.post('/users/create', (req, res) => {
  const { email, password, role } = req.body;

  if (role === 'utilisateur') {
    return res.status(400).json({
      success: false,
      message: 'Le rôle ne peut pas être "utilisateur".',
      key: 'role'
    });
  }

  const newUser = { email, password, role };
  users.push(newUser);

  database.users = users;
  const updatedData = JSON.stringify(database, null, 2);
  fs.writeFileSync('database.json', updatedData);

  res.status(200).json({
    success: true,
    message: 'Utilisateur créé avec succès.'
  });
});

app.listen(3001, () => {
  console.log('Serveur écoutant sur le port 3001');
});
