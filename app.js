const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

//const base = 6;

console.clear();
console.log(argv);

/* const [ , , arg3 = 'base=1'] = process.argv;
const [ , base = 1] = arg3.split('='); */

//console.log(base);


crearArchivo( argv.base, argv.hasta, argv.listar )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.red))
    .catch( err => console.log(err));