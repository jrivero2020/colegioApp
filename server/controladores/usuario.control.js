import { Usuarios } from '../modelos/usuario.js'
import { verErrorSequelize } from '../helpers/sequelizeErrores.js'

const listaUsuarios = async (req, res, next) => {

    try {
        const usuario = await Usuarios.findAll()
        res.json(usuario)
       // next()
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const userByID = async (req, res, next, id) => {
    
    try {
        const usuario = await Usuarios.findByPk(id)
        if (usuario === null) {
            res.status(404).json({ 'mensaje': 'Usuario no encontrado' })
        } else {
            usuario.dataValues.password  = undefined
            req.profile = usuario.dataValues
            next()
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const leerUsuario = (req, res) => { return res.json(req.profile) }

const crearUsuario = async (req, res) => {
    //const { NombreUsuario,Correo,password,apat,amat,nombres,rut,dv,rol } = req.body
    try {
        const newUsuario = await Usuarios.create(req.body)      
        return res.status(200).json({ message: "Registro exitoso" })
    } catch (e) {
        return res.status(500).json({ message: verErrorSequelize(e) })
    }
}

const updateUsuario = async (req, res ) => {
    console.log( "req.profile=====>>>>>", req.profile)
    try {
        const usuario = await Usuarios.findByPk(req.profile.idUsuario)
        usuario.set(req.body)
        usuario.updatedAt = Date.now()
        await usuario.save()
        usuario.password  = undefined
        res.json(usuario)
    } catch (e) {
        return res.status(500).json({ message: verErrorSequelize(e) })
    }
}
const deleteUsuario = async (req, res) => {
    const { id } = req.params
    let user = req.profile // lo voy a ver
    try {
        let usr = await Usuarios.destroy({
            where: { idUsuario: req.profile.idUsuario }
        })
        if (usr > 0) {
            usr.password = undefined
            res.json({ message: "Registro borrado" })
        } else
            res.status(404).json({ message: "No se encontró registro" })
    } catch (e) {
        res.sendStatus(400).json({ message: verErrorSequelize(e) })
    }
}

export default { userByID, leerUsuario, crearUsuario, updateUsuario, listaUsuarios, deleteUsuario }