const db = require('../models/database/db');



db.Estudiante.create({
    matricula: 1133679,
    apellidoPaterno:'dani',
    apellidoMaterno:'Lee',
    nombres:'Juandd',
    semestreIngreso:'2018',
    creditosCursados: 247
}).then(() => {
    console.log('Estudiante creado');
}).catch(err => {
    console.log(err);
}).then(() => {
    console.log('Cerrando conexión');
    db.sequelize;
});