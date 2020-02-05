const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack19:omnistack19@omnistack19-2awpv.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //http://portquiz.net:27017
});

app.use(express.json());
app.use(routes);

app.listen(3333);