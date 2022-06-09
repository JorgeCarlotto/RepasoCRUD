var con = require('../config/conexion');

module.exports ={

    index:function(req, res, next){

        con.query("SELECT * FROM Libros",function(err,datos){
            console.log(datos);
        })
        res.render('libros/index', { title: 'Express' });
    }

}