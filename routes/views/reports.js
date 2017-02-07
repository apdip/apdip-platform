var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'reports';
	locals.data = {
		countries: []
	};

	// Load data
	view.on('init', function(next) {

		var q = keystone.list('Country').model.find();

		q.exec(function(err, results) {
			locals.data.countries = results;
			next(err);
		});

	});

	// Render the view
	view.render('reports');

};
