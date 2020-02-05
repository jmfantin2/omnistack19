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
// GET, POST, PUT (SET), DELETE
//NOTE: req = user info (like cart items)

//req.query = access query params (URL filters)
//req.params = access route params (for PUT or DEL)
//req.body = access req info (for GET or POST)

app.listen(3333);