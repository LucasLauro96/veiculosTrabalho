var model = require('../models/montadora.js');

module.exports = {
    buscarMontadoras,
    buscarMontadoraPorCodigo,
    novaMontadora,
    cadastrarMontadora,
    alterarMontadora,
    deletarMontadora
}

function buscarMontadoras(req, res) {
    model.buscarMontadoras((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/montadoras.ejs', { montadoras: data });
    });
}

function buscarMontadoraPorCodigo(req, res) {
    model.buscarMontadoraPorCodigo(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/alteraMontadora.ejs', { montadora: data[0] });
    });
}

function novaMontadora(req, res) {
    res.render('../app/views/novaMontadora.ejs');
}

function cadastrarMontadora(req, res) {
    model.cadastrarMontadora(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/montadoras');
    });
}

function alterarMontadora(req, res) {
    model.alterarMontadora(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/montadoras');
    });
}

function deletarMontadora(req, res) {
    model.deletarMontadora(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/montadoras');
    });
}