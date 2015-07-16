var keystone = require('keystone');

/**
 * Country Model
 * ==========
 */

var Country = new keystone.List('Country', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Country.add({
  name: { type: String, required: true }
});

Country.relationship({ ref: 'Member', path: 'country' });
Country.register();
