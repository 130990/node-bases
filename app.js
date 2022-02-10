const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors')

const {argv} = require('./config/yargs')
console.clear()
console.log([argv.b, argv.l]);
crearArchivo(argv)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))
