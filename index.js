const express = require("express");
const app = express()

app.get('/api/test', (req, res) => {
    const apiKey = req.query.apiKey;

    res.send({data: 'API endpoint exposed.'})
})

app.listen(8080)