import { DataTypes } from 'sequelize'
import { sequelize } from "../bdatos/bdatos.js"
import bcrypt, { hash } from 'bcrypt'

export const Usuarios = sequelize.define('usuarios', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    NombreUsuario: {
        type: DataTypes.STRING(50),
        unique: { args: true, msg: "Nombre usuario ya existe, utilice otro" },
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "Debe Ingresar a un Usuario válido" },
            len: { args: [4, 25], msg: "El largo debe estar entre 4 y 25 caracteres" }
        },
    },
    Correo: {
        type: DataTypes.STRING(50),
        unique: { args: true, msg: "Correo ya existe, ingrese otro" },
        validate: {
            isEmail: { args: true, msg: "Debe ingresar un correo válido" }
        },
    },
    password: {
        type: DataTypes.STRING(150),
        allowNull: false,
        set(value) {
            if (value) {
                let salt = bcrypt.genSaltSync(12)
                let hash = bcrypt.hashSync(value, salt)
                this.setDataValue('password', hash)
            }
        }
    },
    apat: {
        type: DataTypes.STRING(85),
    },
    amat: {
        type: DataTypes.STRING(85),
    },
    nombres: {
        type: DataTypes.STRING(120),
    },
    rut: {
        type: DataTypes.INTEGER,
        validate: {
            isNumeric: { args: true, msg: "Debe ingresar solamente números" },
            len: { args: [7, 9], msg: "El largo del rut debe estar entre 7 y 9 dígitos" },
            isInt: true,
        }
    },
    dv: {
        type: DataTypes.STRING(1),
    },
    rol: {
        type: DataTypes.INTEGER(2),
        validate: {
            isNumeric: { args: true, msg: "Debe ingresar solamente números" },
            len: { args: [2], msg: "El largo máximo 2 dígitos" },
            isInt: true,
        }        
    },
}, { timestamps: true }

)


Usuarios.prototype.validaPassword = async function (passwordIngresada) {
    return await bcrypt.compare(passwordIngresada, this.password)
}

export const Docente = sequelize.define('docente', {
    id_profesor: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    apat: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "Ingrese ap. Paterno válido" },
            len: { args: [4, 80], msg: "El largo debe estar entre 4 y 80 caracteres" }
        },
    },
    amat: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "Ingrese ap. Materno válido" },
            len: { args: [4, 80], msg: "El largo debe estar entre 4 y 80 caracteres" }
        },
    },
    nombres: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "Ingrese un Nombre válido" },
            len: { args: [4, 80], msg: "El largo debe estar entre 4 y 80 caracteres" }
        },
    },
    activo: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    Correo: {
        type: DataTypes.STRING(50),
        unique: { args: true, msg: "Correo ya existe, ingrese otro" },
        validate: {
            isEmail: { args: true, msg: "Debe ingresar un correo válido" }
        },
    },
    funcion: {
        type: DataTypes.SMALLINT
    }
}, { freezeTableName: true, timestamps: false })



export const Matricula = sequelize.define('matricula', {
    nro_matricula: {
        type: DataTypes.INTEGER,
    },
    rut: {
        type: DataTypes.INTEGER,
    },
    dv: {
        type: DataTypes.STRING(1),
    },    
    apat: {
        type: DataTypes.STRING(80),
    },    
    amat: {
        type: DataTypes.STRING(80),
    },    
    nombres: {
        type: DataTypes.STRING(80),
    },
    genero: {
        type: DataTypes.STRING(10),
    }
    ,
    cod_ense: {
        type: DataTypes.INTEGER,
    }
    ,
    letra: {
        type: DataTypes.STRING(1),
    }
    ,
    desc_grado: {
        type: DataTypes.STRING(60),
    }
}, { freezeTableName: true }
)
