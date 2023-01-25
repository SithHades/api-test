const express = require("express");
const app = express()

const port = 3000;
const hostname = 'localhost';

app.get('/api', (req, res) => {
    const apiKey = req.query.apiKey;

    res.send({data: 'API endpoint exposed.'})
})

app.listen(port, hostname, () => {
    console.log('Server is running at http://${hostname}:${port}/');
})
