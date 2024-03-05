import express from 'express';

const app = express();

const livros = [
{ id: 1, titulo: 'O Senhor dos Anéis' },
{ id: 2, titulo: 'Fundação' },
{ id: 3, titulo: 'Duna' }
];

const autores = [
{ id: 1, nome: 'J.R.R. Tolkien' },
{ id: 2, nome: 'Isaac Asimov' },
{ id: 3, nome: 'Frank Herbert' }
];

app.get("/", (req, res) => {
  res.status(200).send("Bem-vindo(a)");
});

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.get("/autores", (req, res) => {
  res.json(autores);
});

app.post("/livros", (req, res) => {
  const livros = req.body;
  livros.push(livro);
  req.json(livros);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
});