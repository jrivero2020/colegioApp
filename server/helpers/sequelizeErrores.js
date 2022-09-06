
export const verErrorSequelize = (e) => {
    let msg = e.name

    switch( msg ){
        case ( 'SequelizeUniqueConstraintError' || 'SequelizeValidationError'):

            if (msg.substring(0, 13) == "NombreUsuario") {
                msg = 'Nombre de usuario ya existe, pruebe con otro'
            }
            if( msg === "SequelizeUniqueConstraintError"){
                msg = "Ya hay usuario registrado con ese nombre"
            }

            console.log("sequelize==>:", msg)
            break
        case 'SequelizeDatabaseError' :
            msg = e.parent.sqlMessage 
            break
        default:
            msg = e.name
    
    }

    return msg
}
