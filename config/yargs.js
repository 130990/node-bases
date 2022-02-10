const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number'
    })
    .option('l',{
        alias: 'listar',
        demandOption: false,
        default: false,
        type: 'boolean'
    })
    .option('h',{
        alias: 'hasta',
        demandOption: false,
        type: 'number'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw  'La base debe de ser un numero'
        }
        return true
    })
    .check((argv,options)=>{
        if(isNaN(argv.h)){
            throw  'La base debe de ser un numero'
        }
        return true
    })
    .argv


module.exports={
    argv
}