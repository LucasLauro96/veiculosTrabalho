module.exports = (app) => {

    var controller = require('../controllers/automovel');

    app.get('/automoveis', controller.buscarAutomoveis);
    app.get('/novoAutomovel', controller.novoAutomovel);
    app.post('/automovel/novo', controller.cadastrarAutomovel);
    app.get('/automovel/:codigo', controller.buscarAutomovelPorCodigo);
    app.post('/automovel/alterar/:codigo', controller.alterarAutomovel);
    app.get('/automovel/excluir/:codigo', controller.deletarAutomovel);
}