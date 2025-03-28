// recibe las peticiones se encarga de determinar que tipo de solucitudes y de llevarlas al controlador correspondiente

import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearNuevoSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController, 
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';
import { validationDataSuperHeros } from '../middleware/validationRules.mjs';
import { handleValidationErrors } from '../middleware/errorMiddleware.mjs';

const router = express.Router();


router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/buscar/mayores-30', obtenerSuperheroesMayoresDe30Controller);
// Sprint 3 
router.post('/heroes/crear', validationDataSuperHeros(), handleValidationErrors, crearNuevoSuperheroeController);
// Sprint 3 
 router.put('/heroes/actualizar/:id', validationDataSuperHeros(), handleValidationErrors,  actualizarSuperheroeController); 
 router.delete('/heroes/eliminar/id/:id', eliminarSuperheroePorIdController); 
 router.delete('/heroes/eliminar/nombre/:nombre', eliminarSuperheroePorNombreController); 
// Se cambia la ruta de heroes por que al ser la busqueda por cascada toma el id y no llega a mayores-30
//
export default router;