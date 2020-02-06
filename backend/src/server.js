const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack19:omnistack19@omnistack19-2awpv.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //http://portquiz.net:27017
});

app.use(cors()); //any application address can access the API
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);