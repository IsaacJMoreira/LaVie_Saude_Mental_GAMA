const Pacientes = require("./Pacientes.js");
const Psicologos = require("./Psicologos.js");
const Atendimentos = require("./Atendimentos.js");

Atendimentos.belongsTo(Psicologos, {
    foreignKey: 'id_psicologo'
});

Atendimentos.belongsTo(Pacientes, {
    foreignKey: 'id_paciente'
});

Pacientes.hasMany(Atendimentos, {
    fireignKey: 'id_paciente'
});

Psicologos.hasMany(Atendimentos, {
    fireignKey: 'id_psicologos'
});

module.exports ={
    Pacientes,
    Psicologos,
    Atendimentos
};