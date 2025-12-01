const express = require("express")
const conexao = require("./db")
//metodo que contem get.post delete, put
const routers = express.Router();

//Rota Raiz

routers.get("/", (req, res) => {
    //API devolve uma resposta
    res.json({ msg: "API online" })
});
//rotas para cadastrar objeto no banco de dados

routers.post("/cadastrar", (req, res) => {
    const { NOME, CIDADE, ESTADO, ENDERECO, CEP, TELEFONE, IDADE } = req.body;
    try {
        conexao.query("INSET INTO cadastrar_usuarios(NOME, CIDADE, ESTADO, ENDERECO, CEP, TELEFONE, IDADE) VALUES (?,?,?,?,?,?,?)", [NOME, CIDADE, ESTADO, ENDERECO, CEP, TELEFONE, IDADE], (erro) => {
            if (erro) {
                res.json({ msg: "erro ao cadastrar o usuario" })

            }
            else {
                res.json({ msg: "Cadastro realizado com sucesso" })
            }
        })

    }
    catch (erro) {
        res.json({ msg: "Erro no servidor" })
    };
});

module.exports = routers;
//precisa exportar para nao dar erro