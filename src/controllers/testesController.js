exports.paginaInicial = (req, res) => {
  console.log(req.params); // testes/123/algumacoisa
  console.log(req.query); // /testes/?nome=Luiz&sobrenome=Miranda&idade=30&facebookprofile=www.algumacoisa
  res.send(req.params);
  return;
};
