
////////////////////////////////////////////////////////////////////
/*                        REQUIREMENTS                            */
////////////////////////////////////////////////////////////////////

const express = require('express');
const controllerPsicologos = require("../controllers/controllerPsicologos.js");
const controllerAtendimentos = require("../controllers/controllerAtendimentos.js");
const controllerPacientes = require("../controllers/controllerPacientes.js");
const middlewaresPsicologos = require("../middlewares/middlewaresPsicologos.js");
const middlewaresAtendimentos = require("../middlewares/middlewaresAtendimentos.js")
const middlewaresPacientes = require('../middlewares/middlewaresPacientes.js');
const middlewaresLogin = require('../middlewares/middlewaresLogin.js');
const controllerLogin = require("../controllers/controllerLogin.js");
const routes = express.Router();

routes.use(express.json());//allows the server to uses JSON encoding

////////////////////////////////////////////////////////////////////
/*                             LOGIN                              */
////////////////////////////////////////////////////////////////////


//ATENÇÃO ⚠  >>>>>>> POST LOGIN <<<<<<<
routes.post('/login',
    middlewaresLogin.postLogin,
    controllerLogin.postLogin
);


////////////////////////////////////////////////////////////////////
/*                        CRUD PSICÓLOGO                          */
////////////////////////////////////////////////////////////////////

routes.get(
    '/psicologos',
    controllerPsicologos.getAll
);

routes.get(
    '/psicologos/:id',
    controllerPsicologos.getPsicologoById
);

routes.post('/psicologos',
    middlewaresPsicologos.postPsicologo,
    controllerPsicologos.postPsicologo
);

routes.put(
    '/psicologos/:id',
    middlewaresPsicologos.putPsicologoById,
    controllerPsicologos.putPsicologoById
);

routes.delete(
    '/psicologos/:id',
    controllerPsicologos.deletePsicologoById
);

////////////////////////////////////////////////////////////////////
/*                        CRUD PACIENTE                           */
////////////////////////////////////////////////////////////////////

routes.get(
    '/pacientes',
    controllerPacientes.getAll
    );

routes.get(
    '/pacientes/:id',
    controllerPacientes.getPacienteById
    );

routes.post(
    '/pacientes',
    middlewaresPacientes.postPaciente,
    controllerPacientes.postPaciente
    );

routes.put(
    '/pacientes/:id',
    middlewaresPacientes.putPacienteById,
    controllerPacientes.putPacienteById
    );

routes.delete(
    '/pacientes/:id',
    controllerPacientes.deletePacienteById
    );    

////////////////////////////////////////////////////////////////////
/*                       CRUD ATENDIMENTO                         */
////////////////////////////////////////////////////////////////////

routes.get(
    '/atendimentos',

    controllerAtendimentos.getAll
);

routes.get(
    '/atendimentos/:id',

    controllerAtendimentos.getAtendimentoById
);

routes.post(
    '/atendimentos',
    middlewaresAtendimentos.postAtendimento,
    controllerAtendimentos.postAtendimento
);


////////////////////////////////////////////////////////////////////
/*                       EXPORT   🛫 📦 🛬                        */
////////////////////////////////////////////////////////////////////


module.exports = routes;

