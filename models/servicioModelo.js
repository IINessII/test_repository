const express= require("express");
const {createReadStream} = require('fs')
var modelo= require('./usuario')



const app= new express();
const HTML_CONTENT_TYPE = 'text/html'
const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.use(express.static("public"));


const path = require("path");


 require('./conexion')


 
     
 app.post("/upload", (req, res) => {
  var myobj = {nombres: req.body.nombres, apellidos: req.body.apellidos, correo: req.body.correo, celular: req.body.celular, clave: req.body.clave};
  modelo.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;

  })
  res.send("Datos insertados correctamente")
  })


  app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
 

  createReadStream('./index.html').pipe(res)
   
  })


  app.listen(600, () => {

    console.log("aplicacion corriendo en el puerto 600")
    
    })