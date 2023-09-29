import {Router} from 'express'
import docenteCtrl  from '../controladores/docente.control.js'
import authCtrl from '../controladores/auth.control.js'
const router = Router()

router.route('/Docente')
    .get(  docenteCtrl.listaDocente)
    .post( docenteCtrl.crearDocente )

router.route( '/docenteHorarios/:SpOpc')
    .get( docenteCtrl.listaDocHorarios)

router.route('/inscripcionDocente')
    .post( docenteCtrl.inscripcionDocente )

router.route('/Docente/:Id')
    .get(authCtrl.requireSignin,    authCtrl.estaAutorizado, docenteCtrl.leerDocente)
    .put(authCtrl.requireSignin,    authCtrl.estaAutorizado, docenteCtrl.updateDocente)
    .delete(authCtrl.requireSignin, authCtrl.estaAutorizado, docenteCtrl.deleteDocente)

    router.route('/listaAlumnosByRut/:rut')
    .get(docenteCtrl.listaAlumnosByRut)





router.param('Id', docenteCtrl.docenteByID)

export default router
