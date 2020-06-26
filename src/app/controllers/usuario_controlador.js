const UsuariosDAO = require ('../BD/usuario_dao');

var db = require('../../config/database');

class UsuarioControlador
{
    exibeFormAcesso() {
        return function(req, res) {
            res.marko(
                require('../views/index.marko'));    
        }
    }

    validaAcessoUsuario()
    {
        return function(req, res)
        {
            const usuarioDAO = new UsuariosDAO(db);
            usuarioDAO.validaAcesso(req.body.cpf, req.body.senha)
            .then(dados =>
                {
                    if(dados > 0)
                    {
                        req.session.cpf = req.body.cpf;
                        req.session.senha = req.body.senha;
                        console.log("Variavel de sessao cpf = " + req.session.cpf);
                        console.log("Variavel de sessao senha = " + req.session.senha);
                        res.redirect('/carrinho');
                    }
            }).catch(res.send("<h1>Usuario não encontrado!!</h1>"));
        }
    }

    insereNovoUsuario() {
        return function (req, res) {
            const usuarioDAO = new UsuariosDAO(db);
            usuarioDAO.incluiUsuario(req.body)
                .then(res.redirect('/carrinho'))
                .catch(erro => console.log(erro));
        }
    }

    exibeCarrinho() 
    {
        return function (req, res) 
        {
        if (req.session.login) 
        {
                res.marko(
                    require('../views/carrinho/carrinho.marko'));
        }
        else { res.send("<h1>PRIMEIRAMENTE, FAÇA LOGIN!</h1>");  }
        }
    }
}
module.exports = UsuarioControlador;