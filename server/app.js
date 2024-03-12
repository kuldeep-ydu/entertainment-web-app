const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const config = require('./utils/config');
const logger = require('./utils/logger');
const mediaRouter = require('./controllers/mediaRouter');
const userRouter = require('./controllers/userRouter');
const cookieParser = require('cookie-parser');
const loginRouter = require('./controllers/loginRouter');
const logoutRouter = require('./controllers/logoutRouter');

logger.info('connecting to', config.MONGODB_URI);

mongoose.set('strictQuery', true);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info('connected to MongoDB'))
  .catch((error) => logger.error(`error connecting to MongoDB ${error}`));

app.set('view engine', 'ejs');
app.use(
  cors({
    origin: config.CLIENT_URL,
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);
console.log(config.CLIENT_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(mediaRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(userRouter);

module.exports = app;
