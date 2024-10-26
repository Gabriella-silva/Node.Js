import express from "express"; // 'express' é em letra minúscula.
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!"); // Envia uma resposta simples para a rota raiz.
});

app.listen(8081, () => {
  console.log("Servidor rodando na porta 8081");
});
