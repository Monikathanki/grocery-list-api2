const knex = require("knex");

const bcrypt = require("bcryptjs");


const UsersService = {

<<<<<<< HEAD
    hasUserWithUserName(knex, username) {

        return knex("users")

            .where({ username })

            .first()

            .then((user) => !!user);

    },

    insertUser(db, newUser) {

        return db

            .insert(newUser)

            .into("users")

            .returning("*")

            .then((rows) => rows[0]);

    },

    hashPassword(password) {

        return bcrypt.hash(password, 12);

    },
=======
  hasUserWithUserName(knex, username) {

    return knex("users")

      .where({username})

      .first()

      .then((user) => !!user);

  },

  insertUser(db, newUser) {

    return db

      .insert(newUser)

      .into("users")

      .returning("*")

      .then((rows) => rows[0]);

  },

  hashPassword(password) {

    return bcrypt.hash(password, 12);

  },
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b

};


module.exports = UsersService;