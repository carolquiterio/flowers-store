
const ProdutoControlador = require('../controllers/produtos_controler');
const produtosCont = new ProdutoControlador();

const UsuarioControlador = require('../controllers/usuario_controlador');
const usuCont = new UsuarioControlador();

const carrinhoControlador = require('../controllers/carrinho_controller');
const carCont = new carrinhoControlador();

module.exports = (app) => 
{
    // Evitar problema com o CORS
    app.use((req, res, next) => 
    {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    /***************** ROTAS *****************/
    // abre o formulario index.marko
    
    app.get('/', produtosCont.listaTodosOsProdutos());
    app.get('/carrinho', carCont.listaProdutosDoCarrinho());
    app.get('/flores', produtosCont.listaProdutos(1));       // O parametro passado aqui é o codigo da categoria flores na tabela do bd
    app.get('/utilitarios', produtosCont.listaProdutos(3));  // O parametro passado aqui é o codigo da categoria utilitarios na tabela do bd
    app.get('/sementes', produtosCont.listaProdutos(4));     // O parametro passado aqui é o codigo da categoria sementes na tabela do bd
    app.get('/decoracao', produtosCont.listaProdutos(2));    // O parametro passado aqui é o codigo da categoria decoracao na tabela do bd
    app.post('/valida', usuCont.validaAcessoUsuario());      //valida acesso usuario
    app.post('/pesquisaProduto', produtosCont.listaDadosBarra());   //lista dados da barra de  pesquisa
    app.post('/adicionaItemAoCarrinho', carCont.insereItemNoCarrinho());
    app.post('/remover', produtosCont.removeItem());
    app.get('/pagProduto', produtosCont.listaDadosProdutos(1));
    app.post('/insereNovoUsu', usuCont.insereNovoUsuario());
    app.get('/registrar', function(req, res)
    {
        res.marko(
            require('../views/login/registrar.marko')
        )
    });

    app.get('/login', function(req, res)
    {
        res.marko(
            require('../views/login/login.marko')
        )
    });
} // end do modulo ROTAS