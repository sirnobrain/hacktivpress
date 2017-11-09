'use strict'

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const index = require('./routes/index')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index)

const port = process.env.PORT || 3000;
app.listen(port, console.log(`hacktivpress server running on port ${port}`));