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

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(empleado => empleado.id === id);
        (empleado)
            ? resolve(empleado)
            : reject(`El empleado con id ${id} no existe`);

    });
};

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find(salario => salario.idEmpleado === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`El empleado con id ${id} no posee salario`);

    });
};

const id = 1;

getEmpleado(id)
    .then(empleado => {
        console.log(empleado)

        getSalario(empleado.id)
            .then(salario => {
                console.log(salario)
                console.log(`El empleado ${empleado.nombre} tiene un salario de ${salario}`)
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err))
    

