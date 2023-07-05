const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");

const controllerPsicologos = { 
    //GET
    getAll: async (req, res) =>{
        const listagemPsicologos = await Psicologos.findAll();

        res.json(listagemPsicologos);
    },
    //Post 
    // EDIT BY ISAAC: 🔒 PASSWORD CRYPTOGRAPHY IMPLEMENTED
    postPsicologo: async (req,res) => {//THE NAME OF THIS FUNCTION WAS CHANGED
        const{nome,email,senha, apresentacao}= req.body

        const newEncryptedPass = bcrypt.hashSync(senha, 10);

        const novoPsicologo = await Psicologos.create({
            "nome": nome,
            "email" : email,
            "senha": senha,
            "apresentacao": apresentacao
        })

       return res.status(201);//NO RETURN NEEDED BESIDED THE CODE
    },
    //Delete
    deletePsicologoById: async (req,res) => {
        const {id} = req.params;

        await Psicologos.destroy({
        where:{
            id
        }
        });
        res.json("Psicologo deletado com sucesso!")
    },
    //Update
    putPsicologoById: async (req,res) => {
        const {id} = req.params;
        const{nome,email,senha}= req.body

        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha
        },
        {
            where: {
                id
            },
        });
        res.json("Psicologo atualizado com sucesso!");
    },
    // Get por ID
    getPsicologoById: async (req,res) => {
    const { id } = req.params;
    const psicologo = await Psicologos.findByPk(id);
    if (!psicologo) {
      return res.status(404).json({ message: "Psicologo não encontrado" });
    }
    res.json(psicologo);
  },
}
module.exports = controllerPsicologos;