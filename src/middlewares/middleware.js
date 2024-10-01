exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVarialLocal = "Este é o valor da variável local.";
  console.log();
  console.log("Passei no middleware global");
  console.log();
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log();
  console.log("Passei no outro middleware");
  console.log();
  next();
};
