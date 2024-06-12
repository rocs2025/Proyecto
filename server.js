//requerir librerias
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { error } = require('console');
const app = express();
const port = 3000;

//crear conexion mysql
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'Dinatours',
    password: 'campos.alv1955',
    database: 'dinatours'
})

//verificar si se conecto
conection.connect((err)=>{
    if(err){
      console.error(`Error: ${err.stack}`);
      return
    }else{
      console.log("te conectaste exitosamente con el id: "+conection.threadId)
    }
});

app.use(bodyParser.json());

//obtener datos de la base de datos

app.get('/data',(req,res)=>{
   conection.query('SELECT * FROM users',(error,results)=>{
    if(error) throw error;
    res.json(results);
   });
});
app.get('/shop',(req,res)=>{
    conection.query('SELECT * FROM shop',(error,results)=>{
     if(error) throw error;
     res.json(results);
    });
 });

//para subir los datos
app.post('/postData',(require,result)=>{
    const {name,email,password,type}= res.body;
    const query = 'INSERT INTO users (name,email,password,type) VALUES (?,?,?,?)';
    conection.query(query,[name,email,password,type,],(error)=>{
        if(error){
            res.json({success: false, error: error.message});
        }else{
            res.json({success: true});
        }
    });
});
//dar permisos, autorizando que la carpeta public si pueda usarlo y si no hay que no la use

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})