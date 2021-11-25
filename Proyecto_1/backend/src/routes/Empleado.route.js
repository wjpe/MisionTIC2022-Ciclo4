const {Router} = require('express')
const router = Router()

const EmpleadoCtrl = require('../controllers/Empleado.controllers')
const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken ,EmpleadoCtrl.crear)
router.get('/listarempleados', Auth.verificarToken, EmpleadoCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, EmpleadoCtrl.listarID)
router.get('/listarempleadosjefe/:id', Auth.verificarToken, EmpleadoCtrl.empleadoDeUnJefe)
router.delete('/eliminar/:id', Auth.verificarToken, EmpleadoCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, EmpleadoCtrl.actualizar)
router.get('/buscarempleado/:nombres', Auth.verificarToken, EmpleadoCtrl.buscarEmpleado)


module.exports = router

