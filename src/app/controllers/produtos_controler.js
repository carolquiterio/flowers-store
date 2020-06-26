const ProdutoDAO = require('../BD/produtos_dao');

var db = require('../../config/database');

class ProdutosControler
{
    listaTodosOsProdutos()
    {
        return function(req, res)
        {
            const produtoDAO = new ProdutoDAO(db);
           
            produtoDAO.listagemProdutos(function (error, resultados)
            {
                res.marko(
                    require('../views/index.marko'),
                    {
                        produtos : resultados 
                    }
                )
            });
        };
    }

    listaProdutos(id)
    {
        return function(req, res)
        {
                const produtoDAO = new ProdutoDAO(db);
           
                produtoDAO.listagemProdutosComParam(id, function (error, resultados)
                {
                    res.marko
                    (
                        require('../views/vitrine/vitrine.marko'),
                        {
                            produtos : resultados 
                        }
                    )
                });
            
        };
    }


    listaDadosProdutos(id)
    {
        return function(req, res)
        {
            const produtoDAO = new ProdutoDAO(db);
           
            produtoDAO.listaDadosProduto(id, function (error, resultados)
            {
                res.marko
                (
                    require('../views/produto/produto.marko'),
                    {
                        produtos : resultados 
                    }
                )
            });
        };
    }


    listaDadosBarra()
    {
        return function(req, res)
        {
            const produtoDAO = new ProdutoDAO(db);
           
            produtoDAO.barraDePesquisa(req.body.nome, function (error, resultados)
            {
                res.marko
                (
                    require('../views/index.marko'),
                    {
                        produtos : resultados 
                    }
                )
            });
        };
    }
    removeItem()
    {
            return function (req, res) {
                const idProd = req.params.id;
                const prod = new ProdutoDAO(db);
                prod.exclui(idProd)
                    .then(res.redirect('/carrinho'))
                    .catch(erro => console.log(erro));
            }
    }
}
module.exports = ProdutosControler;