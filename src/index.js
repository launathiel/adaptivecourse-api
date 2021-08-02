/* eslint-disable no-console */
const cors = require('cors');
const dotenv = require('dotenv-flow');

dotenv.config({
  node_env: process.env.NODE_ENV || 'development',
});

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(cors());

// mongoose
const connectDB = require('./config/db');

connectDB();

const apiRoutes = require('./api-routes');

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});
