

const argv = require('yargs')
                .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base para la tabla de multiplicar'
                        })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Visualiza la impresión de la tabla'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'La tabla hasta donde se realiza'
                        })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) ){
                        throw new Error('La base debe ser un número')
                    }
                    return true;
                })
                .argv;

module.exports = argv;