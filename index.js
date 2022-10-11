import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

// console.log(process.env)

// con variables de entorno
const  {DB_USER, DB_PASSWORD, DB_NAME, DB_HOST} = process.env


const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`


/*

Modelo (termino de mongoose)
    Es una interfa para comunicarnos con la BD
        - crear
        - actualiar
        - editar
        - consultar
    Hacer referencia a una collection
Para crear un modelo necesitamos un Schema
Schema:
    Nos permitirá definir la estructura de los documentos
    - Que campos (name. lastName, age, ...)
    - Validaciones (requerido, )
    - Restricciones

*/

// Schema de Koders

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: ['h', 'm'] // que valores son validos para este campo
    },
    isGraduate: {
        type: Boolean,
        default: false // tenga un valor por defecto
    }
})

// crear el modelo
//                          (nombre la collección a la que hacemos referencia, schema)
const Koder = mongoose.model('koders', koderSchema)

// 




mongoose.connect(URL) // regresa una promesa
    .then(async (connection) => {
        console.log('Database connected :D')

        // //   Obtener a todos los koders
        //   const allKoders = await Koder.find({}) // regresa una promesa
        //   console.log(allKoders)

        // //   crear a un koder
        // const newKoder = {
        //     name: 'Fanny',
        //     lastName: "Leyva",
        //     age: 19,
        //     gender: 'm'
        // }

        // const koderCreated = await Koder.create(newKoder)
        // console.log(koderCreated)

        // // Actualizar a un koder
        // const newData = {
        //     lastName: 'Ruiz'
        // }
        // const koderUpdated = await Koder.findByIdAndUpdate('633cee9b8d5399f634e65ed3', newData, {new: true})
        // console.log('Koder updated')
        // console.log(koderUpdated)

        // const koderDeleted = await Koder.findByIdAndDelete('633cee9b8d5399f634e65ed3')
        // console.log(koderDeleted)
    })
    .catch((error) => {
        console.error('Error: ', error)
    })

    
    