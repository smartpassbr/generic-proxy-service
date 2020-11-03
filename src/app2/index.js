// Este é o app 2

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'app2'
    });
});

app.listen(9002, () => {
    console.log('app2 is up');
});
