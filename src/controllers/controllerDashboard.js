const { Psicologos,
        Pacientes,
        Atendimentos 
      } = require('../models');

const controllerDashboard = {
    NPA: async (req, res) => {
        const npa = await Pacientes.count();
        res.json(npa);
    },
    NAT: async (req, res) => {
        const nat = await Atendimentos.count();
        res.json(nat);
    },
    NPS: async (req, res) => {
        const nps = await Psicologos.count();
        res.json(nps);
    },
    STAT: async (req, res) => {
        const stat = await Atendimentos.count() / await Psicologos.count() ;
        res.json(stat);
    },
}

module.exports = controllerDashboard;
