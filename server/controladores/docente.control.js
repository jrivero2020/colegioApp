import { Docente, Matricula } from '../modelos/modeloCole.js'
import { verErrorSequelize } from '../helpers/sequelizeErrores.js'
import { sequelize } from "../bdatos/bdatos.js"

const listaDocente = async (req, res) => {
    try {
        const docente = await Docente.findAll()
        res.json(docente)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const listaDocHorarios = async (req, res) => {

    try {
        const parametro = req.params.SpOpc
        const docHorarios = await sequelize.query('CALL SP_HATENCION_PROFES( ? )', {
            replacements: [parametro],
            type: sequelize.QueryTypes.SELECT
        })
        res.json(docHorarios)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const docenteByID = async (req, res, next, id) => {

    try {
        const docente = await Docente.findByPk(id)
        if (docente === null) {
            res.status(404).json({ 'mensaje': 'docente no encontrado' })
        } else {
            req.profile = docente.dataValues
            next()
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const listaAlumnosByRut = async (req, res) => {
    console.log("Rut:", req.params.rut )
    console.log("Params Completo ==>", req.params )
    try {
        let alumno = await Matricula.findOne({
            where: { rut: req.params.rut, activo: true },
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })

        if (!alumno)
            return res.status('401').json({ error: "Alumno no encontrado" })
        const user = {
            apat: alumno.apat,
            amat: alumno.amat,
            nombres: alumno.nombres,
            rut: alumno.rut,
            dv: alumno.dv,
            cod_ense: alumno.cod_ense,
            desc_grado: alumno.desc_grado,
            genero: alumno.genero,
            letra: alumno.letra,
            nro_matricula: alumno.nro_matricula,
        }

        return res.json({ user })
    } catch (err) {
        console.log(err)
        return res.status('401').json({ error: "No se pudo Buscar rut de Alumno" })
    }
}

const leerDocente = (req, res) => { return res.json(req.profile) }

const crearDocente = async (req, res) => {

    try {
        const newdocente = await Docente.create(req.body)
        return res.status(200).json({ message: "Registro exitoso" })
    } catch (e) {
        return res.status(500).json({ message: verErrorSequelize(e) })
    }
}

const inscripcionDocente = async (req, res) => {
    try {
        const newdocente = await Docente.create(req.body)
        return res.status(200).json({ message: "Inscripción exitosa" })
    } catch (e) {
        return res.status(500).json({ message: verErrorSequelize(e) })
    }
}

const updateDocente = async (req, res) => {
    try {
        const docente = await Docente.findByPk(req.profile.iddocente)
        docente.set(req.body)
        docente.updatedAt = Date.now()
        await docente.save()
        docente.password = undefined
        res.json(docente)
    } catch (e) {
        return res.status(500).json({ message: verErrorSequelize(e) })
    }
}
const deleteDocente = async (req, res) => {
    const { id } = req.params
    let user = req.profile // lo voy a ver
    try {
        let alumno = await Docente.destroy({
            where: { iddocente: req.profile.iddocente }
        })
        if (alumno > 0) {
            res.json({ message: "Registro borrado" })
        } else
            res.status(404).json({ message: "No se encontró registro" })
    } catch (e) {
        res.sendStatus(400).json({ message: verErrorSequelize(e) })
    }
}

export default { docenteByID, leerDocente, crearDocente, updateDocente, listaDocente, deleteDocente, inscripcionDocente, listaDocHorarios, listaAlumnosByRut }