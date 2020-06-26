class ProdutosDao
{
    constructor(db)
    {
        this._db = db;
    }

    listagemProdutos(callback)
    {
        var sql = 'SELECT nome, descricao, foto, preco FROM produto';
        console.log(sql);
        this._db.query(sql,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }

    listagemProdutosComParam(id, callback)
    {
        var sql = 'SELECT nome, descricao, foto, preco FROM produto where codCategoria = '+ id;
        console.log(sql);
        this._db.query(sql,
            (erro, resultados) =>
                callback(erro, resultados)
        )
    }
    
    listaDadosProduto(id, callback)
    {
        var sql = 'SELECT nome, descricao, foto, preco from produto where codProduto = ' + id;
        console.log(sql);
        this._db.query(sql,
            (erro, resultados) =>
            callback(erro, resultados)
        )
    }

    barraDePesquisa(nome, callback)
    {
        var sql = 'SELECT nome, descricao, foto, preco from produto where nome = ' + nome;
        console.log(sql);
        this._db.query(sql,
            (erro, resultados) =>
            callback(erro, resultados)
        )
    }

}
module.exports = ProdutosDao;