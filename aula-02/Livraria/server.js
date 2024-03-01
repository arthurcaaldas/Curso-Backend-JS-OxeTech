import express from "express"
import connectDB from "../../aula-03/src/config/dbConnect.js";

const app = express();

app.use(express.json());

const conexao = await connectDB();

conexao.on("Error", (erro) => {
  console.log("erro de comunicação: ", erro)
});

conexao.once("open", () => {
  console.log("conectou no mongoDB")
});

const livros = [
  {id: 1, titulo: "Senhor dos aneis"},
  {id: 2, titulo: "Harry Potter"},
  {id: 3, titulo: "Star Wars"},
  {id: 4, titulo: "Star Wars"},
  {id: 5, titulo: "Star Wars"}
];

app.get("/", (req, res) => {
  res.status(200).send("Curso BackEnd JS OxeTech")
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id",(req,res) =>{
  const id = +req.params.id
  const livro = livros.find(livro => livro.id === id)
  res.status(200).json(livro)
});

app.post("/livros", (req, res) => {
  livros.push(req.body)
  res.status(201).send("Livro criado com sucesso!")
});

app.put("/livros/:id",(req,res) =>{
  const id = +req.params.id
  const livro = livros.find(livro => livro.id === id)
  livro.titulo = req.body.titulo
  res.status(200).send("Livro foi atualizado com sucesso")
 });

 app.delete("/livros/:id",(req,res) =>{
  const id = +req.params.id
  const index = livros.findIndex(livro => livro.id === id)
  livros.splice(index,1)
  res.status(200).send("Livro foi deletado com sucesso")
 });

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

app.delete("/livros", (req, res) => {
});

export default app


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