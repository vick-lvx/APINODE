const express = require("express");
const funcao = require("./functions");
const routers = express.Router();

//Rota raiz
routers.get("/", (req, res) => {
    res.status(200).json({ msg: "API está executando" });
});

//Rota para listar todos os objetos do banco 
routers.get("/listar", async (req, res) => {
    try {
        const consulta = await funcao.ListarTodos();

        console.log(consulta);

        res.status(200).json(consulta);
    }
    catch (erro) {
        res.status(500).json({ msg: "Erro no servidor" });
    }
});

//Rota para listar objeto do banco por ID
routers.get("/listar/:id", async (req, res) => {
    try {
        const consultaID = await funcao.ListarPorID(req.params.id);

        if (consultaID > 0) {
            res.status(200).json(consultaID);
        }
        else {
            res.status(404).json({ msg: "Usuário não encontrado" });
        }
    }
    catch (erro) {
        res.status(500).json({ msg: "Erro no servidor" });
    }
});

//Atividade Manipulação de dados
//rota cadastrar:
routers.post("/cadastrar", async (req, res) => {
    //Post o objeto da requisição vem pelo corpo = req.body
    const { nome, email, senha, rm, cidade, nome_escola, idade } = req.body;

     try {
        const consultaID = await funcao.ValidarEmail(req.params.id);

        if (consulta.length > 0) {
            res.status(401).json({msg:"Email já cadastrado"});
        }
        else {
             const cadastro = await funcao.Cadastrar(nome, email, senha, rm, cidade, nome_escola, idade);

        if (cadastro) {
            res.status(201).json({ msg: "Cadastrado com sucesso" })
        }
        else {
            res.status(404).json({ msg: "Falha ao cadastrar" })
        }
        }
    }
    catch (erro) {
        res.status(500).json({ msg: "Erro no servidor" });
    }
});

routers.delete("/deletar/:id", async (req, res) => {
  try{
        const consultar = await funcao.ListarPorID (req.params.id);
        if(consultar.length > 0){
            const deletar = await funcao.Deletar(req.params.id)
            if(deletar.affectedRows > 0)
            {
                res.status(200).json({msg:"Registro deletado com sucesso"})
            }
            else{
                res.status(404).json({msg:"Erro ao deletar"})
            }
        }
        else{
            res.status(404).json({msg:`O id ${req.params.id}nao existe na base de dados`})
        }

    }
    catch(erro){
        console.log(erro)
        return erro
    }

})



//Rota atualizar

routers.put("/atualizar/:id", async (req, res) => {

    const { senha, rm, cidade, nome_escola, idade} = req.body;
    try{
        const consultar = await funcao.ListarPorID (req.params.id);
        if(consultar.length > 0){
            const atualizar = await funcao.Atualizar(senha, rm, cidade, nome_escola, idade)
            if(atualizar.affectedRows > 0)
            {
                res.status(200).json({msg:"Registro atualizado com sucesso"})
            }
            else{
                res.status(404).json({msg:"Erro ao atualizar"})
            }
        }
        else{
            res.status(404).json({msg:`O id ${req.params.id}nao existe na base de dados`})
        }

    }
    catch(erro){
        console.log(erro)
        return erro
    }
});

//rota para validacao do email



module.exports = routers;