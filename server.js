const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const cors = require('cors');
const morgan = require('morgan');
const apiRouter = require('./api/api');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiRouter); // import API router and mount th routes starting at /api

app.use(errorhandler());

app.listen(PORT, () => {
    console.log(`Server is lisening port ${PORT}`);
});

module.exports = app;