
var db = openDatabase('ss', '1.0', 'Super Saludable DB', 4 * 1024);

function errorDB(error){
	console.log('Error en la consulta:');
	console.log(error);
}

function successDB(){
	console.log('Consulta exitosa');
}

/*INICIALIZACION DE LA BASE DE DATOS, SE CREAN LAS TABLAS SIEMPRE POR SI ES LA PRIMERA VEZ QUE SE EJECUTA LA APLICACION.*/

db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS `respuestas` (`id_jugada` int(11) NOT NULL,`jugador_codigo` int(11) NOT NULL,`respuesta_pregunta` int(11) NOT NULL,`respuesta_vuelta` int(11) NOT NULL,`respuesta_numero` int(11) NOT NULL,`respuesta_respuesta` int(11) NOT NULL, `jugador_edad` int(11) NOT NULL,`jugador_nombre` varchar(255) NOT NULL,`jugador_sexo` int(11) NOT NULL,`jugador_obs` text NOT NULL);");
}, errorDB, successDB);




function deleteAllData(){
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM respuestas WHERE 1=1;");
	}, errorDB, successDB);
}
/*-----------------------------------------------------------------------------------------------------------------------*/


//EL SELECT
//db.transaction(function(tx) {

// tx.executeSql('select * from respuestas where id_jugada = ?', [jugada_id], function(tx,rs) {
//     for (var i = 0; i < rs.rows.length; i++) {
//         var p = rs.rows.item(i);
//         console.log(p);
//     }
// }, errorDB);

// }, errorDB, successDB);



//EL INSERT

// db.transaction(function(tx) {
// tx.executeSql('insert into respuestas values(?,?,?,?,?,?,?,?,?,?)',[2,1,1,1,1,1,10,'marcelo','1','observacion de marcelo']);
// }, errorDB, successDB);