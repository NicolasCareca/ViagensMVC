  const mongoose = require('mongoose');

  const packageSchema = new mongoose.Schema({
    destino: String,
    valor: Number,
    dataSaida: Date,
    dataChegada: Date,
    descricao: String,
    imagens: [String],
  });

  const Package = mongoose.model('Package', packageSchema);

  module.exports = Package;
