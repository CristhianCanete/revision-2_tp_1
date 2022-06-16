const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/')));
// Retorna la pagina de inicio
app.get('index.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
  next();
});
//Retorna la pagina extension para navegador
app.get('./html/extension_para_navegador.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'extension_para_navegador.html'));
  next();
});
//Retorna la pagina tema de investigacion
app.get('./html/investigacion.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'investigacion.html'));
  next();
});
//Retorna la pagina cuenta de twitter
app.get('./html/cuenta_de_twitter.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'cuenta_de_twitter.html'));
  next();
});
//Retorna la pagina tweet
app.get('./html/tweet.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'tweet.html'));
  next();
});
//Retorna la pagina blog
app.get('./html/blog.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'blog.html'));
  next();
});
//Retorna la pagina recursos
app.get('./html/recursos.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'recursos.html'));
  next();
});
//Retorna un mensaje si la url no es valido para el proyecto
app.get('*', (req, res) => {
  res.end('La URL solicitada no esta disponible');
});

app.listen(3000, () => {
    console.log('El servidor se ha iniciado correctamente en el puerto 3000');
});