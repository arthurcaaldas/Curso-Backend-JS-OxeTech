import express from "express";

const app = express();

app.use(express.json());

const livros = [
  {id: 1, titulo: "Homem-Aranha: De Volta ao Lar", pg: 374},
  {id: 2, titulo: "Batman: O Cavaleiro das Trevas", pg: 421},
  {id: 3, titulo: "Superman: Entre a Foice e o Martelo", pg: 298}
];

const autores = [
  {id: 1, autor: "Stan Lee", nacionalidade: "Norte-americano"},
  {id: 2, autor: "Frank Miller", nacionalidade: "Norte-americano"},
  {id: 3, autor: "Mark Millar", nacionalidade: "Escocês"}
]

app.get("/", (req, res) => {
  res.status(200).send("Bem-vindo(a) a Livraria Marvel!")
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros)
});

app.get("/titulos", (req, res) => {
  const titulos = livros.map(livros => livros.titulo);
  res.status(200).json(titulos);
});

app.get("/paginas", (req, res) => {
  const pagina = livros.map(livro => ({titulo: livro.titulo, pg: livro.pg}));
  res.status(200).json(pagina);
});

app.get("/autores", (req, res) => {
  res.status(200).json(autores)
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro Criado com sucesso!");
});

app.post("/autores", (req, res) => {
  autores.push(req.body)
  res.status(201).send("Autor criado com sucesso!")
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});