const CarrinhosDAO = require('../BD/carrinhos_dao');

var db = require('../../config/database');

class CarrinhosControler
{
    insereItemNoCarrinho()
    {
        return function(req, res)
        {
            if (req.session.cpf) 
            {
                const carrinhoDAO = new CarrinhosDAO(db);
                carrinhoDAO.incluiItem(req.session.cpf, req.body.id, req.body.preco, req.body.quantidade)
                .then(res.redirect('/'))
                .catch(erro => console.log(erro));
            }
            else 
            {
                res.send("<h1>PRIMEIRAMENTE, FAÇA LOGIN!</h1>");
            }
        }
       
    }

    listaProdutosDoCarrinho()
    {
        return function(req, res)
        {
            if (req.session.cpf) 
            {
                const carrinhoDAO = new CarrinhosDAO(db);
           
                carrinhoDAO.listagemProdutosComParamcarrinho(req.session.cpf, function (error, resultados)
                {
                    res.marko
                    (
                        require('../views/carrinho/carrinho.marko'),
                        {
                            carrinhos : resultados 
                        }
                    )
                });
            }
            else 
            {
                res.send("<h1>PRIMEIRAMENTE, FAÇA LOGIN!</h1>");
            }
        };
    }
}
module.exports = CarrinhosControler;

