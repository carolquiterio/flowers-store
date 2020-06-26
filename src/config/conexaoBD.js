const mysql = require('mysql');
const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'lojacarol'   //arrumar aqui
});


connection.connect(function(err) {
    if (err) 
      console.log('Erro na CONEXÃO com o BD NODEVESP')
    else
      console.log('CONEXÃO com BD NODEVESP OK!');
});

module.exports = connection;