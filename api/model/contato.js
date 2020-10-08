const mongoose = require('mongoose');

const contatoSchema = mongoose.Schema({
    idContato: mongoose.Schema.Types.ObjectId,
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    telefone: { type: String, required: true, unique: true},
    descricao: String,
    observacao: String
});

module.exports = mongoose.model('Contato', contatoSchema);