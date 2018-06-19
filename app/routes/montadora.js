module.exports = (app) => {

    var controller = require('../controllers/montadora');

    app.get('/montadoras', controller.buscarMontadoras);
    app.get('/novaMontadora', controller.novaMontadora);
    app.post('/montadora/novo', controller.cadastrarMontadora);
    app.get('/montadora/:codigo', controller.buscarMontadoraPorCodigo);
    app.post('/montadora/alterar/:codigo', controller.alterarMontadora);
    app.get('/montadora/excluir/:codigo', controller.deletarMontadora);
}