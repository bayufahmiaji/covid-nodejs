const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./common/sequelize')

const app = express();

app.use(bodyParser.json());

const provinceController = require('./routes/province');

app.use(provinceController);

app.get('/', (req,res) => {

	res.json({"stastus" : 200});
})

app.listen(3000, 'localhost', () => {
    console.log('Server started');

    sequelize
        .authenticate()
        .then(() => {
            console.log('Database connected');
        })
        .catch((e) => {
            console.error(e);
        })
});