const cors = require('cors');

module.exports = app => {
    const corsOptions = {
        origin: 'http://localhost:4200',
        methods: ['GET']
    };

    app.use(cors(corsOptions));
};