const User = require('./models/User');

async function createUser(email, password, role) {
  const existingUser = await User.findOne({
    where: { email: email },
  });

  if (existingUser) {
    throw new Error("L'utilisateur existe déjà.");
  }

  if (role === "user" && role !== "admin") {
    throw new Error("Le rôle ne peut pas être 'utilisateur'.");
  }

  const newUser = await User.create({
    email: email,
    password: password,
    role: role,
  });

  return newUser;
}

module.exports = {
  createUser,
};
