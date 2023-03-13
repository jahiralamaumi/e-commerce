const path = require('path');
const { createUser, login, getUsers, updateUser, deleteUser } = require('./user.controller');
const { createUserSchema, updateUserSchema } = require('./user.schema');
const { validate } = require(path.join(process.cwd(), '/src/modules/core/middlewares/validate'));
const authenticate = require(path.join(process.cwd(), '/src/modules/core/middlewares/authenticate'));

module.exports = function userRoutes(app){
    app.route('/users')
    .get(getUsers)
    .post(validate(createUserSchema), createUser);

    app.post('/users/login', login);

    app.route('/users/:email')
    .patch(authenticate, validate(updateUserSchema), updateUser)
    .delete(deleteUser);
}