const cors = require('cors');
const app = require('express')();
const port = 3000;
const mongoose = require('mongoose');

let corsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions));

app.get('/', (req, res, next) => res.json({ testKey: 'testValue' }));

mongoose.connect('mongodb://localhost:27017/cmr-app-db', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', err => {
    if (err) throw err;

    console.log('Connection opened!');
});

app.listen(port, () => console.log(`App listening on port ${port}`));