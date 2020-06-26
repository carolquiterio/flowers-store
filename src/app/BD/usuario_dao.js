class UsuariosDAO
{
// construtor da classe
    constructor(db)
    { 
        this._db = db; 
    }

    validaAcesso(cpf, senha)
    {
        return new Promise((resolve, reject) =>{
            console.log("LOGIN DA VALIDACAO = " + cpf);
            console.log("SENHA DA VALIDACAO = " + senha );
            var sqlCons = "SELECT * FROM usuario WHERE cpf = " + cpf
            + " and senha = '" + senha + "'"; 
            console.log(sqlCons);
            this._db.query(sqlCons, function (erro, resultado)
            {
                if(resultado.length > 0 ){
                    var dados = resultado.length;
                    resolve(dados);
                }
                else{
                    return reject('Acesso negado!');
                }
            });
        });
    }


    incluiUsuario(usuario) 
    {
        return new Promise((resolve, reject) => 
        {
            var sqlInsere = "INSERT INTO usuario (cpf,nomeUsuario,celular,dataDeNascimento,senha,email) VALUES(" + usuario.cpf + ",'" + usuario.nome + "'," + usuario.celular + "," + usuario.data + ",'"+ usuario.senha +"','"+usuario.email +"')";
            this._db.query(sqlInsere, function (erro) 
            {
                if (erro)
                { 
                    console.log(erro);
                    return reject('O cadastro não pode ser concluido!');
                }
                resolve();
            }); 
        });     
    } 

    mostraProdutosDoCarrinho(usuario)
    {
        return new Promise((resolve, reject) =>
        {
           // var sqlSelect = "SELECT produto from PRODUTO, CARRINHO, USUARIO  WHERE usuario.cpf = '" + usuario.cpf "' and carrinho.codProduto = produto.codProduto ";
            this.db.query(sqlCons, function (erro, resultado)
            {
                if(resultado.length > 0 ){
                    var dados = resultado.length;
                    resolve(dados);
                }
                else{
                    return reject('aaa');
                }
            });
        });
    }
}
module.exports = UsuariosDAO;