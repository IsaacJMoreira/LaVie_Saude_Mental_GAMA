const { Psicologos, Atendimentos } = require("../models");
const bcrypt = require("bcryptjs");
const errors = require('../core/errors/errors.js')

const controllerPsicologos = { 
    //GET
    getAll: async (req, res) =>{
        const listagemPsicologos = await Psicologos.findAll();
        if(listagemPsicologos.length === 0){
            return res.status(200).json({});
        }
        res.json(listagemPsicologos);
    },

     // Get por ID
     getPsicologoById: async (req,res) => {
        const { id } = req.params;
        const psicologo = await Psicologos.findByPk(id);
        if (!psicologo) {
          return res.status(404).json( errors.id_nao_encontrada );
        }
        res.json(psicologo);
      },

    //Post 
    // EDIT BY ISAAC: 🔒 PASSWORD CRYPTOGRAPHY IMPLEMENTED
    postPsicologo: async (req,res) => {//THE NAME OF THIS FUNCTION WAS CHANGED
        const{nome,email,senha, apresentacao}= req.body

        const newEncryptedPass = bcrypt.hashSync(senha, 10);

        const novoPsicologo = await Psicologos.create({
            "nome": nome,
            "email" : email,
            "senha": newEncryptedPass,
            "apresentacao": apresentacao
        })
       return res.status(201).json(novoPsicologo);
    },
    //Delete
    // EDIT BY ISAAC: DELETES ONLY IF ID IS PRESENT
    deletePsicologoById: async (req,res) => {
        const {id} = req.params;

        const atendimento = await Atendimentos.count({
            where: {
                id_psicologo : id
            }
        });

        if(atendimento > 0) return res.status(403).json(errors.delete_forbidden);//we do this so we don't break our server.

        const psicologo = await Psicologos.findByPk(id);
        

        if(!psicologo) return res.status(404).json( errors.id_nao_encontrada );

        await Psicologos.destroy({
            where: {
                id        
            }
        }).then(()=>{
            res.status(204).end(); 
        });
    },
    //Update
    // EDIT BY ISAAC: 🔒 PASSWORD CRYPTOGRAPHY IMPLEMENTED
    putPsicologoById: async (req,res) => {
        const { id } = req.params;

        const psicologo = await Psicologos.findByPk(id);

        if(!psicologo) return res.status(400).json( errors.id_nao_encontrada );

        const{ nome, email, senha, apresentacao }= req.body

        
        const newEncryptedPass = senha? bcrypt.hashSync(senha, 10): null;

        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            newEncryptedPass, 
            apresentacao
        },
        {
            where: {
                id
            },
        });
        return res.json(await Psicologos.findByPk(id));
    },
}
module.exports = controllerPsicologos;