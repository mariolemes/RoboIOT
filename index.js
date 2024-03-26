const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();
const cors = require("cors");

// Variáveis para armazenar o estado dos botões
let l1 = 0;
let up = 0;
let down = 0;
let right = 0;
let left = 0;
let garra = 0;

app.use(cors());

app.post("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });

  // Atualiza as variáveis com base nos valores recebidos no corpo da solicitação
  l1 = req.body.l1;
  up = req.body.up;
  down = req.body.down;
  right = req.body.right;
  left = req.body.left;
  garra = req.body.garra;

  console.log("l1:", l1);
  console.log("up:", up);
  console.log("down:", down);
  console.log("right:", right);
  console.log("left:", left);
  console.log("garra:", garra);

  res.end();
});

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });

  // Retorna o estado atual de todas as variáveis
  res.write(
    JSON.stringify({
      l1: l1,
      up: up,
      down: down,
      right: right,
      left: left,
      garra: garra,
    })
  );
  res.end();
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
