import express from "express"; // 'express' é em letra minúscula.
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!"); // Envia uma resposta simples para a rota raiz.
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
