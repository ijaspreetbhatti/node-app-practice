const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (request, response) => {
    try {
        response.send(await readFile('index.html', 'utf8'));
    } catch (error) {
        response.status(500).send('❌❌❌');
    }
});

app.listen(process.env.PORT || 3000, () => console.log('App on http://localhost:3000'));