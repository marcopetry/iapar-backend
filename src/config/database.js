global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'probikes',
  database: 'iapar-estagio',
  define: {
    timestamps: true,
    underscored: true,
  },
};
