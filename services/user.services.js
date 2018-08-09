const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/user.model');

module.exports.create = async (ctx) => {

  const userExists = await User.findOne({ username: ctx.request.body.username })
  
  if (userExists) {
    ctx.status = 401;
    ctx.body = {
      message: "The username you entered already exisits in the database"
    };
    return ctx;
  }
  else {
    const salt = bcrypt.genSaltSync(saltRounds);
    ctx.request.password = bcrypt.hashSync(ctx.request.body.password, salt);
    const newUser = await User.create(ctx.request.body)
    ctx.status = 200;
    ctx.body = newUser
    return ctx;
  }

}
module.exports.authenticate = async (ctx, next) => {

  const userExists = await User.findOne({ username: ctx.request.body.username })

  
  if (!userExists) {
    ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    }
    return ctx;
  }

  if (bcrypt.compareSync(ctx.request.body.password, userExists.password)) {
    ctx.status = 200;
    ctx.body = {
      token: jwt.sign({ role: 'admin', userId: userExists._id }, config.secret),
      message: "Successfully logged in!",
      firstName: userExists.firstName,
      lastName: userExists.lastName
    };
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    };
  }
  return ctx;
}

module.exports.getAll = async (ctx) => {
  const users = await User.find({});

  ctx.status = 200;
  ctx.body = users;

  return ctx;
}

module.exports.delete = async (ctx) => {

  const deletedUser = await User.deleteOne({ _id: ctx.params.id });

  ctx.status = 200;
  ctx.body = { message: 'User deleted'};

  return ctx;
}