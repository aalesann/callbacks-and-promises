const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Pedro'
    },
    {
        id: 3,
        nombre: 'Ana'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000,
        idEmpleado: 1
    },
    {
        id: 2,
        salario: 2000,
        idEmpleado: 2
    },
    {
        id: 3,
        salario: 3000,
        idEmpleado: 3
    }
];

// Implementación de la función para obtener empleado
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(empleado => empleado.id === id);
    
    if (!empleado) {
        callback(`El empleado con id ${id} no existe`); // Error
    } else {
        callback(null, empleado);
    }
};


// Para obtener el salario, se necesita el id del Empleado que se compara con idEmpleado
const getSalario = (id, callback) => {
    const salario = salarios.find(salario => salario.idEmpleado === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`El salario con id ${id} no existe`);
    }
};


const id = 2;

// Callbacks anidados (callback hell) 
getEmpleado(id, (err, empleado) => {
    
    if (err) {
        return console.log(err)
    }
    getSalario(empleado.id, (err, salario) => {
        if (err) {
            return console.log(err)
        }
        
        // Si no hay errores, se muestra el salario del empleado 
        return console.log(`El salario de ${empleado.nombre} es de ${salario}`);
    });

});