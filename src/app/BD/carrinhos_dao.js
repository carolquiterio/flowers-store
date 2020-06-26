class CarrinhosDAO
{
// construtor da classe
    constructor(db)
    { 
        this._db = db; 
    }

    incluiItem(usu,pro, qtd, pre)
    {
        return new Promise((resolve, reject) =>
        {
            var sqlInsere = "insert into carrinho (codUsuario, codProduto, quantidade, valorTotalItem, valorTotalCompra) values (" + 
            usu + "," +  pro + "," + qtd + "," + pre + (pre*qtd) + ")";

            this._db.query(sqlInsere, function (erro) 
            {
                if (erro)
                {    
                    console.log(erro);
                    return reject('A inclusão não pode ser concluida!');
                }
                resolve();
            }); 
        });
    }

    listagemProdutosComParamcarrinho (id, callback)
    {
        var sql = 'SELECT codProduto preco FROM carrinho where codUsuario = ' + id;
        console.log(sql);
        this._db.query(sql,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
    
}
module.exports = CarrinhosDAO;