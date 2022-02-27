// import Knex from "knex";
// import knex from 'knex';
// var TediousConnection = require('tedious').Connection;

// var environment = process.env.NODE_ENV || 'development';
// var config = require('../knexfile')[environment];
// const knexInstance:Knex = knex(config);

// // TODO: We should remove tedious connection, right now we are not able to find any workaround of using existing connection
// // TODO: Close connections on server crash
// export const tediousConnection = new TediousConnection({
// 	server: config.connection.host,
// 	options: {
// 		enableArithAbort: true,
// 		database: config.connection.database,
// 		debug: true,
// 		multipleStatements: config.connection.multipleStatements
// 	},
// 	authentication: {
// 		type: "default",
// 		options: {
// 			userName:config.connection.user,
// 			password: config.connection.password,

// 		}
// 	}
// });

// tediousConnection.on('connect', function (err) {
// 	if (err) {
// 		console.log('Error: ', err)
// 	}
// 	// If no error, then good to go...
// 	console.log('Connected VIA TEDIOUS')
// });

// export default knexInstance;