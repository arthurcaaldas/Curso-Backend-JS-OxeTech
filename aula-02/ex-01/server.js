import express from "express";

const app = express();

const livros = [
  {id: 1, titulo: "Homem-Aranha: De Volta ao Lar"},
  {id: 2, titulo: "Batman: O Cavaleiro das Trevas"},
  {id: 3, titulo: "Superman: Entre a Foice e o Martelo"}
];

const autores = [
  {id: 1, autor: "Stan Lee"},
  {id: 2, autor: "Frank Miller"},
  {id: 3, autor: "Mark Millar"}
]

app.get("/", (req, res) => {
  res.status(200).send("Exercicio01")
});

app.get("/livros", (req, res) => {
  const titulos = livros.map(livro => livro.titulo);
  res.status(200).json(titulos);
});

app.get("/autores", (req, res) => {
  res.status(200).json(autores)
});





app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

