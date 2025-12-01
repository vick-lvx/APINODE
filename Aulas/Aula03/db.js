//variável para armazenar as propriedades de conexão 
// com mysql 
const mysql = require("mysql2/promise");

//criar conexão com banco de dados
const conexao = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "senai"
});

module.exports = conexao;