<<<<<<< HEAD
const CategoriesService = {
    getAllCats(knex) {
        return knex.select("*").from("categories");
    },
    getById(knex, id) {
        return knex.from("categories").select("*").where("id", id).first();
    },
};

module.exports = CategoriesService;
=======
 const CategoriesService = {
   getAllCats(knex) {
     return knex.select("*").from("categories");
   },
   getById(knex, id) {
     return knex.from("categories").select("*").where("id", id).first();
   },
 };

 module.exports = CategoriesService;
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
