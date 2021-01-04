 const app = require('../src/app')

<<<<<<< HEAD
describe('App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/api')
      .expect(200, 'Hello, world!')
  })
})
=======
 describe('App', () => {
   it('GET / responds with 200 containing "Hello, world!"', () => {
     return supertest(app)
       .get('/api/gla')
       .expect(200, 'Hello, world!')
   })
 })
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b
