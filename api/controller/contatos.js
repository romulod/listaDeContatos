const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Contato = require('../model/contato');

router.get("/", (req, res, next) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
  const page = req.query.page ? parseInt(req.query.page) : 1;

  Contato.find()
    .skip((page - 1) * pagination)
    .limit(pagination)
    .then(contatos => {
      const response = {
        NContatosNaPagina: contatos.length,
        Contatos: contatos.map(contato => {
          return {
            id: contato._id,
            nome: contato.nome,
            tipo: contato.tipo,
            telefone: contato.telefone
          }
        })
      }
      console.log(contatos);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", function (req, res) {
  const contato = req.body;
  Contato.create(contato).then(contatos => {
    //const response = {
    //  Contato: contatos.map(contato => {
    //    return {
    //     mensagem: "Contato Adicionado com Sucesso!",
    //      novoContato: {
    //        nome: contato.nome,
    //        tipo: contato.tipo,
    //        telefone: contato.telefone
    //      }
    //    }
    //  })
    //}
    //res.status(201).json(response);
    res.status(201).json({ mensagem: "Contato Adicionado com Sucesso!" })
  }).catch(err => {
    res.status(500).json({mensagem: "Ocorreu um erro ao tentar gravar novo contato." + err});
  })
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Contato.findById(id, '_id nome canal valor descricao obsevacao')
    .exec()
    .then(contato => {
      if (contato) {
        res.status(200).json({ mensagem: "Contato encontrado: ", contato });
      } else {
        res
          .status(404)
          .json({ mensagem: "Nenhum contato encontrado para o ID fornecido." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  contatoArray = req.body;

  contatos = {};

  var contatos = contatoArray.reduce(function (acc, ccr, i) {
    acc[i] = ccr;
    return acc;
  }, {});

  Contato.update({ _id: id }, {
    $set: contatos[0]
  })
    .exec()
    .then(result => {
      res.status(201).json({
        mensagem: 'Contato alterado com sucesso!',
        contatos
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Contato.remove({ _id: id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({ mensagem: "Contato excluído com sucesso!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;

