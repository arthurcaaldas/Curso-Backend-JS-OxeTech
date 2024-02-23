import express from "express"

const app = express();

app.use(express.json());

const livros = [
  {id: 1, titulo: "Senhor dos aneis"},
  {id: 2, titulo: "Harry Potter"},
  {id: 3, titulo: "Star Wars"}
];

app.get("/", (req, res) => {
  res.status(200).send("Curso BackEnd JS OxeTech")
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body)
  res.status(201).send("Livro criado com sucesso!")
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

app.delete("/livros", (req, res) => {
});




// http:
// import http from "http"

// const rotas = {
//   "/": "livraria OxeTech",
//   "/livros": "Harry Potter e a pedra filosofal",
//   "/autores": "J. K. Rowling"
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type": "text/plain"})
//   res.end(rotas[req.url])
// });

// server.listen(3000, () => {
//   console.log("Servidor rodando em: http://localhost:3000")
// });