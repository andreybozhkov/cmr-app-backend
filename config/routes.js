module.exports = app => {
    app.get('/', (req, res) => res.json({ testKey: 'testValue' }));

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    })
};