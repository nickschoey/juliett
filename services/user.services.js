const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/user.model');

module.exports.create = async (ctx) => {

  const userExists = await User.find({username: ctx.request.username })

  if (userExists) {
    ctx.status = 401;
    ctx.body = {
      message: "The username you entered already exisits in the database"};
    return ctx;
  }
  else {
    const salt = bcrypt.genSaltSync(saltRounds);
    ctx.request.password = bcrypt.hashSync(ctx.request.password, salt);
    const newUser = await User.create(user)
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
      token: jwt.sign({ role: 'admin' }, config.secret),
      message: "Successfully logged in!"
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
  console.log(users);
  
  ctx.status = 200;
  ctx.body = users;

  return ctx;
}