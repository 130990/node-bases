const fs = require('fs')
const colors = require('colors')

const crearArchivo = async ({base = 5, listar, hasta}) => {
    try {
        console.log('======================='.green);
        console.log('   Tabla del '.yellow, colors.blue(base));
        console.log('======================='.green);
        let salida = ''
        let consola = ''
        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${colors.rainbow('X')} ${index} = ${base * index}\n`
            salida += `${base} X ${index} = ${base * index}\n`
        }

          listar && console.log(consola);
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err
        //     console.log(`tabla-${base}.txt CREADO!!`)
        // })
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}