var express = require('express');
var mongoose = require('mongoose');
var uri = "mongodb+srv://admin:admin@assessment.ijve7.mongodb.net/CRUD?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', function () {
    console.log('Mongoose is connedted!');
});
var app = express();
var ports = process.env.PORT || 3000;
var items = [
    {
        id: 1,
        name: 'milk'
    },
    {
        id: 2,
        name: 'breed'
    }
];
app.get('/', function (req, res) {
    res.send(items);
});
app.listen(3000, function () { return console.log('Listening on port 3000'); });
