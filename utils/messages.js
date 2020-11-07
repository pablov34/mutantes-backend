const initMessage = (req, res) =>
  res.send('Api para detectar mutantes, enviar secuencia mediante POST a /mutant');

 const notFoundEndpoint = (req, res) =>
  res.send('EndPoint not found, use /mutant');

exports.initMessage = initMessage;
exports.notFoundEndpoint = notFoundEndpoint;