const userService = require('./services/User');

app.post('/users/create', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const newUser = await userService.createUser(email, password, role);
    res.status(200).json({
      success: true,
      message: 'Utilisateur créé avec succès.',
      user: newUser,
    });
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});
