const express = require("express");
const userRoutes = require("../../modules/user/user.routes");

module.exports = () => {
    const app = express();
    app.use(express.json());
    app.set('port', process.env['PORT']);
    userRoutes(app);
    return app;
};
