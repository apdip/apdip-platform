var keystone = require('keystone');

/**
 * Hospital Model
 * ==========
 */

var Hospital = new keystone.List('Hospital', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Hospital.add({
  name: { type: String, required: true }
});

Hospital.relationship({ ref: 'Member', path: 'hospital' });
Hospital.register();
