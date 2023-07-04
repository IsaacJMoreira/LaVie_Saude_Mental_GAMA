const { Psicologos } = require("../models")

const controllerPsicologos = { 
    //GET
    listaPisicologos:async (req, res) =>{
        const listagemPsicologos = await Psicologos.findAll();

        res.json(listagemPsicologos);
    },
    //Post
    async cadastroPsicologo(req,res) {
        const{nome,email,senha}= req.body

        const novoPsicologo = await Psicologos.create({
            "nome": nome,
            "email" : email,
            "senha": senha
        })

        res.json("Novo psicologo cadastrado!")
    },
    //Delete
    async deletePsicologo(req,res) {
        const {id} = req.params;

        await Psicologos.destroy({
        where:{
            id
        }
        });
        res.json("Psicologo deletado com sucesso!")
    },
    //Update
    async updatePsicologo(req,res){
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
  async getPsicologoById(req, res) {
    const { id } = req.params;
    const psicologo = await Psicologos.findByPk(id);
    if (!psicologo) {
      return res.status(404).json({ message: "Psicologo não encontrado" });
    }
    res.json(psicologo);
  },
}
module.exports = controllerPsicologos;