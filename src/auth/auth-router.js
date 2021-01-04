const express = require("express");
const AuthService = require("./auth-service");
const authRouter = express.Router();

authRouter
<<<<<<< HEAD
    .route("/login")
    .all((req, res, next) => {
        knexInstance = req.app.get("db");
        next();
    })
    .post((req, res, next) => {
        const { password, username, name } = req.body;
        const user = { password, username, name };
        for (const field of ["username", "password"]) {
            if (!req.body[field]) {
                return res.status(400).json({
                    error: `Missing ${field}`,
                });
            }
        }
        AuthService.getUserWithUserName(knexInstance, username).then((dbUser) => {
            if (!dbUser) {
                return res.status(400).json({
                    error: "User doesn't exist",
                });
            }
            AuthService.comparePasswords(password, dbUser.password).then(
                (isMatch) => {
                    if (!isMatch) {
                        return res.status(400).json({
                            error: "Incorrect username or password",
                        });
                    }
                    const subject = dbUser.username;
                    const payload = { user_id: dbUser.id };
                    res.send({
                        authToken: AuthService.createJwt(subject, payload),
                    });
                }
            );
        });
    });
=======
  .route("/login")
  .all((req, res, next) => {
    knexInstance = req.app.get("db");
    next();
  })
  .post((req, res, next) => {
    const { password, username, name } = req.body;
    const user = { password, username, name };
    for (const field of ["username", "password"]) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: `Missing ${field}`,
        });
      }
    }
    AuthService.getUserWithUserName(knexInstance, username).then((dbUser) => {
      if (!dbUser) {
        return res.status(400).json({
          error: "User doesn't exist",
        });
      }
      AuthService.comparePasswords(password, dbUser.password).then(
        (isMatch) => {
          if (!isMatch) {
            return res.status(400).json({
              error: "Incorrect username or password",
            });
          }
          const subject = dbUser.username;
          const payload = { user_id: dbUser.id };
          res.send({
            authToken: AuthService.createJwt(subject, payload),
          });
        }
      );
    });
  });
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b

module.exports = authRouter;