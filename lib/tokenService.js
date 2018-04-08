const jwt = require("jsonwebtoken");

try {
    const config = require('./config.json');
    // do stuff
} catch (ex) {
    console.log(ex);
}

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