const path = require("path");
const express = require("express");
const xss = require("xss");
const ListsService = require("./lists-service");
const { requireAuth } = require("../middleware/jwt-auth");
const logger = require("../logger");

const listsRouter = express.Router();
<<<<<<< HEAD
// const parser = express.json()
=======
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b

const serializeList = (lists) => {
    return {
        category: lists.category,
        name: xss(lists.name),
        note: xss(lists.note),
        price: lists.price,
        weight: lists.weight,
        checked: lists.checked,
<<<<<<< HEAD
        // category_id: lists.category_id,
        user_id: lists.user_id,
=======
        category_id: lists.category_id,
        user_id: lists.user_id,

>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
    };
};

listsRouter
<<<<<<< HEAD
    .route("/")
    .get(requireAuth, (req, res, next) => {
=======
    .route("/").get(requireAuth, (req, res, next) => {
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
        const knexInstance = req.app.get("db");
        const user_id = req.user.id;
        ListsService.getAllLists(knexInstance, user_id)
            .then((lists) => {
                res.json(lists);
            })
            .catch(next);
    })
    .post(requireAuth, (req, res, next) => {
        const {
            category,
            name,
            note,
            price,
            weight,
            checked,
<<<<<<< HEAD
            user_id,
=======
            category_id,
            user_id,

>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
        } = req.body;

        const newList = {
            category,
            name,
            note,
            price,
            weight,
            checked,
<<<<<<< HEAD
            user_id,
        };
        // console.log(newList)
        for (const [key, value] of Object.entries(newList))
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` },
                });
            }
        ListsService.insertList(req.app.get("db"), newList)
            .then((list) => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${list.id}`))
                    .json(list);
            })
            .catch(next);
    });


listsRouter
    .route("/all/:id")
    .get(requireAuth, (req, res, next) => {
        const knexInstance = req.app.get("db");
        const user_id = req.params.id;
        ListsService.getAllById(knexInstance, user_id)
            .then((lists) => {
                res.json(lists);
            })
            .catch(next);
    })

listsRouter
    .route("/:id")
    .all((req, res, next) => {
        ListsService.getById(req.app.get("db"), req.params.id)
            .then((list) => {
                if (!list) {
                    return res.status(404).json({
                        error: { message: `List doesn't exist` },
                    });
                }
                res.list = list;
                next();
            })
            .catch(next);
    })
=======
            category_id,
            user_id,

        };

        for (const [key, value] of Object.entries(newList))
            if (value == null) {
                return res.status(400)
                    .json({
                        error: { message: `Missing '${key}' in request body` },
                    });
            }
        ListsService.insertList(req.app.get("db"), newList).then((list) => {
            res
                .status(201).location(path.posix.join(req.originalUrl, `/${list.id}`))
                .json(list);
        })
            .catch(next);
    });

listsRouter.route("/:id").all((req, res, next) => {
    ListsService.getById(req.app.get("db"), req.params.id).then((list) => {
        if (!list) {
            return res.status(404).json({
                error: { message: `List doesn't exist` },
            });
        }
        res.list = list;
        next();
    })
        .catch(next);
})
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
    .get(requireAuth, (req, res, next) => {
        res.json(res.list);
    })
    .delete(requireAuth, (req, res, next) => {
        ListsService.deleteList(req.app.get("db"), req.params.id)
<<<<<<< HEAD
            .then(() => {
                res.status(204).end();
            })
            .catch(next);
=======
            .then((numRowsAffected) => {
                res.status(204).end();
            }).catch(next);
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
    })
    .patch(requireAuth, (req, res, next) => {
        const {
            id,
            name,
            note,
            weight,
            price,
            category,
            category_id,
            user_id,
            start_date,
        } = req.body;

        const listToUpdate = {
            id,
            name,
            note,
            weight,
            price,
            category,
            category_id,
            user_id,
            start_date,
        };

        const numberOfValues = Object.values(listToUpdate).filter(Boolean).length;
        if (numberOfValues === 0) {
            logger.error(`Invalid update without required fields`);
            return res.status(400).json({
                error: {
                    message: `Request body must contain either 'note' or 'name'`,
                },
            });
        }

        ListsService.updateList(req.app.get("db"), req.params.id, listToUpdate)
<<<<<<< HEAD
            .then((updatedList) => {
                res.json(updatedList)
            })
            .catch(next);
    })
    // .put(requireAuth, (req, res, next) => {
    .put((req, res, next) => {
        const { id, checked } = req.body;
        const listCheck = { id, checked };
        console.log(listCheck)
=======
            .then((numRowsAffected) => {
                res.status(204).end();
            })
            .catch(next);
    })
    .put(requireAuth, (req, res, next) => {
        const { id, checked } = req.body;
        const listCheck = { id, checked };
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b

        const numberOfValues = Object.values(listCheck).filter(Boolean).length;

        if (numberOfValues === 0) {
            logger.error(`Invalid update without required fields`);
            return res.status(400).json({
                error: {
<<<<<<< HEAD
                    message: `Request body must contain either 'note' or 'name'`,
=======
                    message: `Request body must contain either 'note' or 'name'`
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
                },
            });
        }

<<<<<<< HEAD
        ListsService.updateList(req.app.get("db"), req.params.id, listCheck)
            .then((data) => {
                res.json(data)
            })
            .catch(next);
    });

=======
        ListsService.updateChecked(req.app.get("db"), req.params.id, listCheck).then((numRowAffected) => {
            res.status(204).end();
        })
            .catch(next);
    });


>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
module.exports = listsRouter;