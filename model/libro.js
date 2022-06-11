module.exports={

    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM Libros",funcion)
    },

    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO Libros (libros, imagenes) VALUES(?,?)",[datos.nombre, datos.archivo],funcion)
    },


}