//arquivo main que faz a chamada de todas classes do projeto
const express = require("express"); // importa a biblioteca express


const app = express();

app.use(express.json()); // habilita para utilizar objeto json

conexao.query("select 1")
    .then(() => { // função de seta / arrow function : Abreviamento de função
        console.log("conexão realizada com sucesso")
        //definir a escuta do servidor/API NODE
        //Servidor back-end online
        app.listen(3001, () => {
            console.log("servidor executando na url http://localhost:3001")
        })
    })
    .catch(erro => console.log("Erro ao se conectar\n" + erro))

