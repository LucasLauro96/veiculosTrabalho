var client = require('../../config/dbConnection');
var tabela = 'montadora';

module.exports = {
    buscarMontadoras,
    buscarMontadoraPorCodigo,
    cadastrarMontadora,
    alterarMontadora,
    deletarMontadora
}

function buscarMontadoras(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}

function buscarMontadoraPorCodigo(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE mon_codigo = ${id}`, callback);
}

function cadastrarMontadora(montadora, callback) {
    var msql = `INSERT INTO ${tabela} SET ? `;
    client.query(msql, montadora, callback);
}

function alterarMontadora(id, montadora, callback) {
    var msql = `UPDATE ${tabela} SET mon_nome = '${montadora.mon_nome}', mon_fantasia = '${montadora.mon_fantasia}', mon_pais = '${montadora.mon_pais}' WHERE mon_codigo = '${id}'`;
    client.query(msql, callback);
}

function deletarMontadora(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE mon_codigo = ${id}`, callback);
}