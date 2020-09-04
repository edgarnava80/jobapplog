const express = require('express');
const morgan = require('morgan');
//const cors = require('cors');
const applicationRouter = require('./routes/applicationRoutes');

const app = express();

//  1)  MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json()); //  Added express.json method to the middleware stack
app.use(express.static(`${__dirname}/public`));
//app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//  3) ROUTES

app.use('/api/v1/applications', applicationRouter);

module.exports = app;
