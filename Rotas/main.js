import express from "express"; // 'express' é em letra minúscula.
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html"); // Envia uma resposta simples para a rota raiz.
});
 

app.get("/sobre", (req,res) => {

  res.send("oiii, sou a bibi");
});

app.get("/seokjin", (req,res) => {

  res.send("nice songgg")
})

app.get("/ola/:nome", (req,res) => {
  res.send(req.params.nome+"<h1>Bem vindo</h1>")
})

app.listen(8081, () => {
  console.log("Servidor rodando na porta 8081");
});
