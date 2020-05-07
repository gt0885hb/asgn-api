let express = require('express')
let app = express();
let routes = require('./router');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost/asgn-api', {
    useNewUrlParser: true
})
var db = mongoose.connection;

if (!db) {
    console.log("Connection unsuccessful!");
} else {
    console.log("Database connected successfully!");
}

app.use('/asgn-api', routes);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running contacts-api on port " + port);
});