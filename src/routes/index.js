////////////////////////////////////////////////////////////////////
/*                        REQUIREMENTS                            */
////////////////////////////////////////////////////////////////////

const express = require('express');
const produtoController = require( "../controllers/produtoController.js");
const routes = express.Router();

routes.use(express.json());//allows the server to uses JSON encoding


////////////////////////////////////////////////////////////////////
/*                        CRUD PSICÓLOGO                          */
////////////////////////////////////////////////////////////////////

routes.get(
    '/psicologos',   
    middlewaresPsicologos.getAll,    
    controllerPsicologos.getAll
    );

routes.get(
    '/psicologos/:id',
    middlewaresPsicologos.getPsicologoById,
    controllerPsicologos.getPsicologoById
    );

routes.post('/psicologos',
    middlewaresPsicologos.postPsicologo,
    controllerPsicologos.postPsicologo
    );


    //ATENÇÃO ⚠  >>>>>>> POST LOGIN <<<<<<<
    routes.post('/login',
    middlewaresPsicologos.postLogin, 
    controllerPsicologos.postLogin
    );

routes.put(
    '/psicologos/:id',
    middlewaresPsicologos.putPsicologoById,
    controllerPsicologos.putPsicologoById
    );

routes.delete(
    '/psicologos/:id',
    middlewaresPsicologos.deletePsicologoById,
    controllerPsicologos.deletePsicologoById
    );
    
////////////////////////////////////////////////////////////////////
/*                        CRUD PACIENTE                           */
////////////////////////////////////////////////////////////////////

routes.get(
    '/pacientes',
    middlewaresPacientes.getAll,
    controllerPacientes.getAll
    );

routes.get(
    '/pacientes/:id',
    middlewaresPacientes.getPacienteById,
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
    middlewaresPacientes.deletePacienteById,
    controllerPacientes.deletePacienteById
    );    

////////////////////////////////////////////////////////////////////
/*                       CRUD ATENDIMENTO                         */
////////////////////////////////////////////////////////////////////

routes.get(
    '/atendimentos',
    middlewaresAtendimentos.getAll,
    controllerAtendimentos.getAll
    );

routes.get(
    '/atendimentos/:id',
    middlewaresAtendimentos.getAtendimentoById,
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