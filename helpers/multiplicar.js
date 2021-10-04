const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, hasta = 10, listar = false) => {
    try {
   
        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base*index}\n`;    
        }
        
        if ( listar ) {
            console.log('=============================='.green);
            console.log(`        Tabla del ${ base }`);
            console.log('=============================='.green);
            console.log(salida);
        }        
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
        return `Archivo creado tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }    

};

module.exports = {
    crearArchivo,
}