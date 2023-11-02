const bcrypt = require('bcrypt');
const User = require('../models/user');
const AuthenticationError = require('../exceptions/AuthenticationError');
const InvariantError = require('../exceptions/InvariantError');

exports.userSign = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError('Kredential not valid. User not found');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new AuthenticationError('The credentials you entered are invalid');
  }

  return user;
};

exports.createUser = async ({
  username, email, password, role = 'USER',
}) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new InvariantError('email already used');
  }

  const hashedPassword = await bcrypt.hashSync(password, 10);

  const newUser = await new User({
    username,
    email,
    password: hashedPassword,
    role,
  }).save();

  return newUser;
};
