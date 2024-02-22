import http from "http"

const rotas = {
  "/": "livraria OxeTech",
  "/livros": "Harry Potter e a pedra filosofal",
  "/autor": "J. K. Rowling"
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end(rotas[req.url])
});

server.listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000")
});