const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || 'Wo8shimima!',
    database: env.DB_NAME || 'patients',
  }
};

module.exports = config;
