
export const verErrorSequelize = (e) => {
    let msg = e.name
    console.log( e)
    switch( msg ){
        case ( 'SequelizeUniqueConstraintError' || 'SequelizeValidationError'):
            console.log(msg)
            if (msg.substring(0, 13) == "NombreUsuario") {
                msg = 'Nombre de usuario ya existe, pruebe con otro'
            }
            break
        case 'SequelizeDatabaseError' :
            msg = e.parent.sqlMessage 
            break
        default:
            msg = e.name
    
    }

    return msg
}
