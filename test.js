const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const app = express();


app.engine('handlebars',
    handlebars({ defaultLayout: 'main_logo' }));
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var route = require('./router/productRouter');
app.use('/', route);

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

