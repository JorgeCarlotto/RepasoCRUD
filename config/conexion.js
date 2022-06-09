var mysql = require("mysql");

var con=mysql.createConnection({  //creo la conexion.
    host: "localhost",
    port: 3308,
    user:'root',
    password:'root',
    database:'Libros'
}); 

con.connect(
    (e)=>{
        if(!e){
            console.log("Servido conectado correctamente")
        }else{
            console.log("Error de conexión")
        }
    }
);

module.exports = con;