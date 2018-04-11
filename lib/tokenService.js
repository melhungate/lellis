const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || require('./config.json').secret; //@mel this seems wrong ask Simon about this

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