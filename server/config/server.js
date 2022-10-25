module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 'PORT'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ADMIN_JWT_SECRET'),
    },
  },
});
