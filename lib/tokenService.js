const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || require('./config.json');

const create = user => {
  const { _id } = user;
  const payload = {
    user: {
      id: _id
    }
  };

  return jwt.sign(payload, secret);
};

module.exports = {
  create
};