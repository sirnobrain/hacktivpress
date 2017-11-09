'use strict'

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const index = require('./routes/index');
const articles = require('./routes/articles');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/articles', articles);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`hacktivpress server running on port ${port}`));