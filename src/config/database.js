require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'probikes',
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
  },
};
