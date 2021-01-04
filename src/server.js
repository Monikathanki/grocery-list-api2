const knex = require('knex')
let app = require('./app')
<<<<<<< HEAD
let { PORT, DATABASE_URL } = require('./config')

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
=======
let { PORT, DB_URL } = require('./config')

const db = knex({
  client: 'pg',
  connection: DB_URL,
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
})

app.set('db', db)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})