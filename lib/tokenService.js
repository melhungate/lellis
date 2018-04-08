const jwt = require("jsonwebtoken");
const config = require("./config.json");

const secret = process.env.SECRET||config.secret

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