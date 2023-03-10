const path = require('path');
const { createUser, getUsers, updateUser, deleteUser } = require('./user.controller');
const { createUserSchema } = require('./user.schema');
const { validate } = require(path.join(process.cwd(), '/src/modules/core/middlewares/validate'));

module.exports = function userRoutes(app){
    app.route('/users')
    .get(getUsers)
    .post(validate(createUserSchema), createUser);

    app.route('/users/:email')
    .patch(updateUser)
    .delete(deleteUser);
}