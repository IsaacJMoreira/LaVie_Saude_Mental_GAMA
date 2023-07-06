//DIEGO
const { Pacientes } = require("../models");

const controllerPacientes = {
    async getAll(req, res){
        const listaPacientes = await Pacientes.findAll({
            include: Atendimento //🚩 
        });

        res.status(200).json(listaPacientes);
    },

    async getPacienteById(req, res){
        const { id } = req.params;
        const pacienteById = await Pacientes.findByPk(id);
        
        if(!id) return res.status(404).json("ID não encontrado")//🚩 
        
        res.status(200).json(pacienteById);
    },

    async postPaciente(req, res) {
        const { nome, email, nascimento, id_paciente } = req.body;

        const novoPaciente = await Pacientes.create({ 
            nome,
            email,
            nascimento,
            id_paciente
         }); 

         res.status(201).json(novoPaciente);
    },

    async putPacienteById(req, res){
        const { id } = req.params;
        const { nome, email, nascimento } = req.body;

        const pacienteAtualizado = await Pacientes.update({
            nome,
            email,
            nascimento,
        },
        {
            where: {
                id,
            },
        }
        );

        res.status(200).json(`Paciente atualizado: ${pacienteAtualizado}`);//🚩 
    },

    async deletePacienteById(req, res){
        const { id } = req.params;

        if(!id) return res.status(404).json("ID não encontrado")//🚩 

        await Pacientes.destroy({
            where:{
                id,
            },
        });

        res.status(204).json("Paciente deletado");//🚩 

    },

}

module.exports = controllerPacientes;