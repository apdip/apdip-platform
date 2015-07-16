var keystone = require('keystone');

/**
 * Pathology Model
 * ==========
 */

var Pathology = new keystone.List('Pathology', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Pathology.add({
  name: { type: String, required: true }
});

Pathology.relationship({ ref: 'Member', path: 'pathology' });
Pathology.register();
