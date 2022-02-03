module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd754d5c0da115e562898f88f9936b7ea'),
  },
});
