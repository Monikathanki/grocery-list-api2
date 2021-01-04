require('dotenv').config();

module.exports = {
    "migrationsDirectory": "migrations",
    "driver": "pg",
    "connectionString": (process.env.NODE_ENV === 'test')
<<<<<<< HEAD
        ? process.env.TEST_DATABASE_URL
        : process.env.DATABASE_URL,
=======
        ? process.env.TEST_DB_URL
        : process.env.DB_URL,
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
}