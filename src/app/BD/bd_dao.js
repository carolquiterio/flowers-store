class UsuariosDao
{
// construtor da classe
    constructor(db)
    { 
        this._db = db; 
    }

    incluiUsuarios(usuario) 
    {
        return new Promise((resolve, reject) => 
        {
            var sqlInsere = "INSERT INTO USUARIO (nomeUsu,cpfUsu,dataNiverUsu,emailUsu,celUsu,foneUsu) VALUES('" + usuario.nome + "','" + usuario.cpf + "','" + usuario.niver + "','" + usuario.email + "," + usuario.cel + ","+ usuario.fone +"')";
            this._db.query(sqlInsere, function (erro) 
            {
                if (erro)
                { 
                    console.log(erro);
                    return reject('Inclusão do novo usuario NÃO foi concluída!');
                }
                resolve();
            }); 
        });     
    } 
}
module.exports = UsuariosDAO;