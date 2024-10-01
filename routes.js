const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");
const testesController = require("./src/controllers/testesController");
// ============ CHAMANDO VARIOS MIDDLEWARE ================
// function meuMiddleware(req, res, next) {
//   req.session = { nome: "Luiz", sobrenome: "Miranda" };
//   console.log("Passei no seu middleware");
//   next(); // chama o proximo middleware
// }
// route.get(
//   "/",
//   meuMiddleware,
//   homeController.paginaInicial,
//   function (req, res, next) {
//     console.log("Ainda estou aqui...");
//   }
// );
// route.post("/", homeController.trataPost);
// ========================================================

// Rota da Home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rota de Contato
route.get("/contato", contatoController.paginaInicial);

// Rota de Testes
route.get("/testes/:idUsuarios?/:parametro?", testesController.paginaInicial);

module.exports = route;
