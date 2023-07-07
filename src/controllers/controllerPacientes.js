const { Pacientes } = require('../models');
const errors = require('../core/errors/errors.js');

const controllerPacientes = {
    async getAll(req, res){
        const listaPacientes = await Pacientes.findAll();
        if (!listaPacientes){
                return res.status(200).json({})
        }
        res.status(200).json(listaPacientes);
    },
    async getPacienteById(req, res){
        const { id } = req.params;
        const pacienteById = await Pacientes.findByPk(id);
        if(!pacienteById) return res.status(404).json(errors.id_nao_encontrada)
        res.status(200).json(pacienteById);
    },
    async postPaciente(req, res) {
        const { nome, email, nascimento } = req.body;
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            nascimento,
         });
         res.status(201).json(novoPaciente);
    },
    async putPacienteById(req, res){
        const { id } = req.params;
        const { nome, email, nascimento } = req.body;
        const paciente = await Pacientes.findByPk(id);
        if(!paciente) return res.status(400).json( errors.id_nao_encontrada );
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
        res.status(200).json(await Pacientes.findByPk(id));
    },
    async deletePacienteById(req, res){
        const { id } = req.params;
        const paciente = await Pacientes.findByPk(id);
        if(!paciente) return res.status(404).json( errors.id_nao_encontrada );
        await Pacientes.destroy({
                where: {
                    id
                }
            }).then(()=>{
                res.status(204).end();
            });
    },
}
module.exports = controllerPacientes;