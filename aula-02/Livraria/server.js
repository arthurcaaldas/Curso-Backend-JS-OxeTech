import express from "express"

const app = express();

const livros = [
  {id: 1, nome: "Senhor dos aneis"},
  {id: 2, nome: "ABBABA"},
  {id: 3, nome: "SCACA"}
];

app.get("/", (req, res) => {
  res.status(200).send("Curso BackEnd JS OxeTech")
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
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