const routes = require("express").Router();
const User = require("../routes/users");
const Admin = require("../routes/admin");
const Risk = require("../routes/risks");

routes.use('/users', User);
routes.use('/admin', Admin);
routes.use('/risks', Risk);

module.exports = routes;
