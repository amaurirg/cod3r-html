// Instalar nodemon para reiniciar o servidor automaticamente
// npm i --save-dev nodemon
// com -dev vai para devDependencies do package.json
// Em caso de erro, uma alternativa é
// npm install -g --force nodemon

// Inicializar o servidor
// Sem nodemon: node server.js ou node

// Inicializar o servidor
// Com nodemon: nodemon server.js ou nodemon

const express = require("express");
const app = express();

// Faz parser no corpo do request e jogar no request.body
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, resp) => {
  console.log(req.body);
  resp.send("Parabéns. Usuário incluído com sucesso.");
});

app.post("/usuario/:id", (req, resp) => {
    // o id retornado será o do input hidden com value 3 em form.html
    // Se fosse o método GET, os dados viriam pela url e estariam em req.query
    console.log(req.params.id);
    console.log(req.body);
    resp.send("Parabéns. Usuário alterado.");
  });
  
app.listen(3003);
