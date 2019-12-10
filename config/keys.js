require('dotenv').config();
module.exports = {
    mongoURI: `mongodb://mern:${process.env.DB_PASS}@ds353748.mlab.com:53748/mernjwt`,
    secretOrKey: "pizzaCookies"
  };