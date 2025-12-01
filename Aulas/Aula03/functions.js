const conexao = require('./db');

//Função para listar todos objetos do banco
module.exports.ListarTodos = async () =>{
    try{
        const [resultado] = await conexao.query("SELECT id, nome, email, senha, rm, cidade, nome_escola, idade, data_criacao from cadastrar_alunos");
        
        return resultado;
    }
    catch(erro){
        return erro
    }
};

//Função que lista usuário por ID com parâmetro
module.exports.ListarPorID = async (id) => {

    console.log(id);
    try{
        const [resultado] = await conexao.query("SELECT * FROM cadastrar_alunos WHERE id = ?", [id]);

        return resultado;
    }
    catch(erro){
        return erro
    }
}

//Função cadastrar

module.exports.Cadastrar = async (nome, email, senha, rm, cidade, nome_escola, idade) => {
    try{
        console.log(nome)
        const [resultado] = await conexao.query("INSERT INTO cadastrar_alunos (nome, email, senha, rm, cidade, nome_escola, idade) VALUES (?, ?, ?, ?, ?, ?, ?)", [nome, email, senha, rm, cidade, nome_escola, idade])
        return resultado
    }
    catch(erro){
        return erro
    }
}

//funcao deletar
module.exports.Deletar = async (nome_escola, idadeid ) => {
    try{
        const deletar = await conexao.query("DELETE FROM cadastrar_alunos WHERE id = ?", [id])
    }
    catch(erro){
        return erro
    }
}
//funcao atualizar

module.exports.Atualizar = async (senha, rm, cidade, nome_escola, idade) =>{
    const [resultado] = await conexao.query ("UPDATE cadastrar_alunos SET senha = ?, rm = ?, cidade = ?, nome_escola = ?, idade = ?")[senha, rm, cidade, nome_escola,idade]
} 

//funcao validar email

module.exports.ObterEmail = async (email) =>{
    try{
        const resultado = await conexao.query ("SELECT email from cadastrar_alunos WHERE email =?", [email])
        return resultado
    }
    catch(erro)
    {
        return erro
    }
}

