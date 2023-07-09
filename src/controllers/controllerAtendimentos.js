const { Atendimentos } = require('../models');
const bcrypt = require("bcryptjs");
const errors = require('../core/errors/errors.js');

const controllerAtendimentos = { 
    //GET
    getAll: async (req, res) =>{
        const listagemAtendimentos = await Atendimentos.findAll();

        res.json(listagemAtendimentos);
    },

     // Get por ID
     getAtendimentoById: async (req,res) => {
        const { id } = req.params;
        const atendimento = await Atendimentos.findByPk(id);
        if (!atendimento) {
          return res.status(404).json( errors.id_nao_encontrada );
        }
        res.json(atendimento);
      },
      postAtendimento: async (req,res) => {
        console.log(req.id_psicologo);
        const{id_paciente,data_atendimento,observacao}= req.body
       
        const novoAtendimento = await Atendimentos.create({
            id_paciente,
            data_atendimento,
            observacao,
            "id_psicologo":1,            
        })
       return res.status(201).json(novoAtendimento);
    },
    };

module.exports = controllerAtendimentos