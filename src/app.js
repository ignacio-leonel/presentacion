const express = require('express'); /*traigo la constante de la libreria*/
const app = express(); /*asigno el valor en la constante app*/
const PORT= 3001;
app.get('/api', (req, res)=>{ res.json({mensaje:'chau mundo'}) .status(200)});
app.listen (PORT, ()=>{console.log('estoy escuchando en el puerto: '+ PORT)});