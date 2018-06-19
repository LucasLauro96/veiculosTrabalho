var client = require('../../config/dbConnection');
var tabela = 'automovel';

module.exports = {
    buscarAutomoveis,
    buscarAutomovelPorCodigo,
    cadastrarAutomovel,
    alterarAutomovel,
    deletarAutomovel
}

function buscarAutomoveis(callback) {
    client.query(`SELECT * FROM ${tabela} a INNER JOIN montadora m ON m.mon_codigo = a.mon_codigo`, callback);
}

function buscarAutomovelPorCodigo(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE aut_codigo = ${id}`, callback);
}

function cadastrarAutomovel(automovel, callback) {
    var msql = `INSERT INTO ${tabela} SET ? `;
    client.query(msql, automovel, callback);
}

function alterarAutomovel(id, automovel, callback) {
    var msql = `UPDATE ${tabela} SET aut_modelo = '${automovel.aut_modelo}', aut_cor = '${automovel.aut_cor}', aut_tipo = '${automovel.aut_tipo}', aut_ano = '${automovel.aut_ano}', aut_valorcusto = '${automovel.aut_valorcusto}' WHERE aut_codigo = ${id}`;
    client.query(msql, callback);
}

function deletarAutomovel(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE aut_codigo = ${id}`, callback);
}