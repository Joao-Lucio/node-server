const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true })); // Dizendo para o express tratar o body da requisição como um objeto
app.use(express.static(path.resolve(__dirname, "public"))); // Definindo pasta para os arquivos estáticos como imagens, CSS e JavaScript
app.set("views", path.resolve(__dirname, "src", "views")); // Definindo o diretório de visualização
app.set("view engine", "ejs"); // Especificando o EJS como o mecanismo de criação de modelos
// Proprios Middleware
app.use(middlewareGlobal);
app.use(routes); // Usando um módulo personalizado para manipular as rotas da aplicação

// Inicia o servidor na porta 3000 e registra uma mensagem no console
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
