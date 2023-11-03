const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const { errorHandler } = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');

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
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to API Foods</h1>');
});

/** MAIN ROUTE */
const routesDir = path.join(__dirname, 'routes');
fs.readdirSync(routesDir).map((r) => {
  app.use('/api', require(`${routesDir}/${r}`));
});

/** ROUTE ERROR HANDLER */
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
