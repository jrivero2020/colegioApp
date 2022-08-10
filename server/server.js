import { config }  from './../config/config.js';
import app         from './express'
import {sequelize} from './bdatos/bdatos.js'


async function main(){
    try{
        //await sequelize.sync( {alter: true}) // actualiza cualquier cambio en la estructura
        await sequelize.sync()
        app.listen( config.nodeport) 
        console.log( 'Estamos listos en puerto ', config.nodeport)    
    }catch(err){
        console.log('No pude conectarme a MySql', err)
    }
}

main()