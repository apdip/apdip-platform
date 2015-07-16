var keystone = require('keystone');

/**
 * Doctor Model
 * ==========
 */

var Doctor = new keystone.List('Doctor', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Doctor.add({
  name: { type: String, required: true }
});

Doctor.relationship({ ref: 'Member', path: 'doctor' });
Doctor.register();
