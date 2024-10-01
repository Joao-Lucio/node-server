exports.paginaInicial = (req, res, next) => {
  console.log(req.session.usuario);
  // res.send(`<form action='/' method='POST'>
  //       Nome: <input type='text' name='nome'>
  //       Outro campo: <input type='text' name='outrocampo'>
  //       <button>Enviar</button>
  //       </form>
  //       `);
  res.render("index", {
    titulo: "Este será um titulo da página",
    tituloHTML:
      'Este será um <span style="color: red;">titulo</span> da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
  // console.log("Respondi o cliente");
  // next(); // chama o proximo middleware
};

exports.trataPost = (req, res) => {
  console.log(req.body);
  res.send("Recebi o formulário");
  return;
};
