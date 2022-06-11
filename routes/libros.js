var express = require('express');
var router = express.Router();

const librosController = require('../controllers/librosController')

const multer = require('multer');
let fecha =  Date.now();

let rutaAlmacen = multer.diskStorage(
    {
        destination:function(request,file,callback) {
            callback(null,'./public/images/');
        },
        filename:function(request,file,callback) {
            console.log(file)
            callback(null,fecha+"_"+file.originalname);
        }
}
);

let cargar = multer({ storage:rutaAlmacen })

/* GET home page. */
router.get('/',librosController.index );
router.get('/crear',librosController.crear );
router.post("/",cargar.single("archivo"),librosController.guardar);

module.exports = router;
