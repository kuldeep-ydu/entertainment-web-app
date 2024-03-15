const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');

const config = require('./utils/config');
const logger = require('./utils/logger');

const userRouter = require('./controllers/userRouter');
const authRouter = require('./controllers/authRouter');
const mediaRouter = require('./controllers/mediaRouter');
const bookmarkRouter = require('./controllers/bookmarkRouter');

const middleware = require('./utils/middleware');

logger.info('connecting to', config.MONGODB_URI);

mongoose.set('strictQuery', true);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info('connected to MongoDB'))
  .catch((error) => logger.error(`error connecting to MongoDB ${error}`));

app.set('view engine', 'ejs');
app.use(function (request, response, next) {
  response.setHeader(
    'Access-Control-Allow-Origin',
    'https://entertainment-web-app-jet.vercel.app',
  );
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  response.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

console.log('CLIENT ADDRESS ===========> ', config.CLIENT_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(middleware.requestLogger);

app.use(userRouter);
app.use(authRouter);
app.use(mediaRouter);
app.use(bookmarkRouter);

module.exports = app;
