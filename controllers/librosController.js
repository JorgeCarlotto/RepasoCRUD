var con = require('../config/conexion');
var libro =require('../model/libro')

module.exports ={

    index:function(req, res, next){

        libro.obtener(con, function(err,datos){
            console.log(datos);
            res.render('libros/index',{tittle :"Aplicación",libros:datos});
        })

    },
    crear:function(req, res, next){
        res.render('libros/crear')
    },

    guardar:function(req, res, next){
        console.log(req.body);
        console.log(req.file.filename);
        libro.insertar(con,req.body, function(err){
             res.redirect('/libros');
            
        })
        
    
    }



}