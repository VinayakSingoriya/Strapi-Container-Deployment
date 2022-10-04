module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6cbbba6daccf87ed2f1bfdb99912cee4'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
