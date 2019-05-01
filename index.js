const app = require('express')();
const port = 3000;

app.get('/', (req, res) => res.json({ testKey: 'testValue' }));

app.listen(port, () => console.log(`App listening on port ${port}`));