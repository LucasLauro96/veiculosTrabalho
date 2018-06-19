var model = require('../models/automovel.js'),
    montadora = require('../models/montadora');

module.exports = {
    buscarAutomoveis,
    buscarAutomovelPorCodigo,
    novoAutomovel,
    cadastrarAutomovel,
    alterarAutomovel,
    deletarAutomovel
}

function buscarAutomoveis(req, res) {
    model.buscarAutomoveis((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/automoveis.ejs', { automoveis: data, title: 'Automoveis' });
    });
}

function buscarAutomovelPorCodigo(req, res) {
    model.buscarAutomovelPorCodigo(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

            montadora.buscarMontadoras((err2, mons) => {
            if (err2)
                return res.json(err2);

            res.render('../app/views/alteraAutomovel.ejs', { automovel: data[0], montadoras: mons });
        });
    });
}

function novoAutomovel(req, res) {
    montadora.buscarMontadoras((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/novoAutomovel.ejs', { montadoras: data });
    });
}

function cadastrarAutomovel(req, res) {
    model.cadastrarAutomovel(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/automoveis');
    });
}

function alterarAutomovel(req, res) {
    model.alterarAutomovel(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/automoveis');
    });
}

function deletarAutomovel(req, res) {
    model.deletarAutomovel(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/automoveis');
    });
}