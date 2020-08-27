const express = require('express');
const apiRouter = express.Router();
const employeesRouter = require('./employeeIdRouter');
const menusRouter = require('./menusRouter');

apiRouter.use('/employees', employeesRouter);
apiRouter.use('/menus', menusRouter);

module.exports = apiRouter;