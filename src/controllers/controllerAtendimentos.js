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
  
      //POST
      postAtendimento: async (req,res) => {
        
        const{id_paciente,atendimento,OBS}= req.body
       
        const novoAtendimento = await Atendimentos.create({
            id_paciente,
            atendimento,
            OBS,
            id_psicologo: req.auth.id,  //now it uses auth. Beware ⚠  
        })
       return res.status(201).json(novoAtendimento);
    },
    };

module.exports = controllerAtendimentos;

