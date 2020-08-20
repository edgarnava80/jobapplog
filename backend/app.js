const express = require('express');
const morgan = require('morgan');
const applicationRouter = require('./routes/applicationRoutes');

const app = express();

//  1)  MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json()); //  Added express.json method to the middleware stack
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//  3) ROUTES

app.use('/api/v1/applications', applicationRouter);

module.exports = app;
