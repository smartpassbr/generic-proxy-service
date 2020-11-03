// Este é o app 1

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'app1'
    });
});

app.listen(9001, () => {
    console.log('app1 is up');
});
