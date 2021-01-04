<<<<<<< HEAD
const listsService = {
    getAllLists(knex, user_id) {
        return knex.from("lists").select("*").where("user_id", user_id);
    },

    getById(knex, id) {
        return knex.from("lists").select("*").where("id", id).first();
    },

    getAllById(knex, user_id) {
        return knex.from("lists").select("*").where("user_id", user_id);
    },

    insertList(knex, newList) {
        return knex
            .insert(newList)
            .into("lists")
            .returning("*")
            .then((rows) => {
                return rows[0];
            });
    },

    deleteList(knex, id) {
        return knex("lists").where({ id }).delete();
    },

    updateList(knex, id, newListFields) {
        console.log(id, newListFields)
        return knex("lists")
            .where({ id })
            .update(newListFields)
            .returning("*")
    }
};

=======

const listsService = {

    getAllLists(knex, user_id) {

        return knex.from("lists").select("*").where("user_id", user_id);

    },

    getById(knex, id) {

        return knex.from("lists").select("*").where("id", id).first();

    },


    insertList(knex, newList) {

        return knex

            .insert(newList)

            .into("lists").returning("*")

            .then((rows) => {

                return rows[0];

            });

    },

    deleteList(knex, id) {

        return knex("lists").where({ id }).delete();

    },

    updateList(knex, id, newListFields) {

        return knex("lists").where({ id }).update(newListFields);

    },

};



>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
module.exports = listsService;