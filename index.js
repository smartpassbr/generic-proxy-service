// Este é o proxy

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'proxy'
    });
});


// TODO: escrever um handler de repasse os requests pro app1 e app2

app.all('/:service', (req, res) => {
    // Repassar o request
    res.status(500).send({
        error: 'not_implemented'
    });
});

app.listen(9000, () => {
    console.log('proxy is up');
});
