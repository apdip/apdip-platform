/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 * 
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{ 'name.first': 'Ricardo', 'name.last': 'Pereira', email: 'ricardo.pereira@apdip.pt', password: 'servico.1', isAdmin: true },
		{ 'name.first': 'Maria João', 'name.last': 'Mousinho', email: 'mj.mousinho@apdip.pt', password: 'servico.1', isAdmin: true }
	],
	Country: [
		{ 'name': 'Portugal' },
		{ 'name': 'Espanha' },
		{ 'name': 'França' },
		{ 'name': 'Alemanha' }
	],
	Hospital: [
		{ 'name': 'CHUC - Universidade de Coimbra' },
		{ 'name': 'HSML - Santa Maria de Lisboa' },
		{ 'name': 'HSMP - Santa Maria do Porto' },
		{ 'name': 'HLP - Lusíadas Porto' }
	],
	Doctor: [
		{ 'name': 'Drª Emília Faria' },
		{ 'name': 'Drª Susana Silva' },
		{ 'name': 'Drº Bonito' }
	],
	Pathology: [
		{ 'name': 'Agamaglobulinemia Ligada ao Cromossoma X' },
		{ 'name': 'Doença Granulomatosa Crónica' },
		{ 'name': 'Imunodeficiência Comum Variável' },
		{ 'name': 'Imunodeficiência Combinada Grave' },
		{ 'name': 'Síndrome de Hiper-IgM' },
		{ 'name': 'Síndrome de Wiskott Aldrich' }
	]
};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone'),
	async = require('async'),
	User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin(admin, done) {
	
	var newAdmin = new User.model(admin);
	
	newAdmin.isAdmin = true;
	newAdmin.save(function(err) {
		if (err) {
			console.error("Error adding admin " + admin.email + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + admin.email + " to the database.");
		}
		done(err);
	});
	
}

exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};

*/
