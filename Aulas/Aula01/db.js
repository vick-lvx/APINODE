//incluir biblioteca de conexão
const mysql = require ("mysql2")

//criar conexão com banco de dados

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "senai" // criar banco de dados
});

conexao.connect((erro) => {
    if(erro){
        console.log("erro ao conectar")
    }
    else{
        console.log("Conectado com sucesso")
    }
});

module.exports = conexao;
