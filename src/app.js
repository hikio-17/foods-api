const express = require('express');
const cors = require('cors');

const app = express();

require('dotenv').config();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

// /** INITIALIZE DB */
require('./config/db')();

/** MIDDLEWARES */
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  res.status(200).send('<h1>Welcome to API</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});