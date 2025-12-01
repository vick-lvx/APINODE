const express = require("express");
const conexao = require("./db");
const routers = require("./routers");
const app = express();

app.use(express.json());
app.use(routers);

conexao.query("select 1")
.then(()=>{
    console.log("sucesso")
    app.listen(3001, function(){
        console.log("servidor executando na url:http://localhost:3001")
    });
})
.catch(erro => console.log("conexão falhou \n" + erro))