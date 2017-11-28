//imports
var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    request = require('request');

//config
app.use(express.static(__dirname + '/view'));

//gambs
app.get('/:nome/:email/:senha', (req, res) => {
    request.post({
        uri: 'http://back:8881/',
        method: 'post',
        json: {
            nome: req.params.nome,
            email: req.params.email,
            senha: req.params.senha
        }
    }, (err, data) => {
        if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
        else {

            if(data.statusCode != 200) res.status(500).send(data.body);
            else {
                
                console.log(data.body);
                res.status(200).send(data.body);

            }

        }
    });
});

//listen
var port = process.env.PORT || 8882;
http.listen(port, () => {
    console.log('FRONT');
    console.log('port: %d', port);
});