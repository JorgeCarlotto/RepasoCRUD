var con = require('../config/conexion');
var libro =require('../model/libro')

module.exports ={

    index:function(req, res, next){

        libro.obtener(con, function(err,datos){
            console.log(datos);
            res.render('libros/index',{tittle :"Aplicación",libros:datos});
        })

    }



}