var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Member Model
 * ==========
 */

var Member = new keystone.List('Member', {
  track: { createdAt: true, createdBy: true, updatedAt: true, updatedBy: true }
});

Member.add({
  name: { type: Types.Name, required: true, index: true },
  state: { type: Types.Select, options: 'associate, friend, archived', default: 'associate', index: true },
  number: { type: Types.Number, index: true },
  taxnum: { type: Types.Number, label: 'TAX Number' },
  address: { type: String },
  zipcode: { type: String, width: 'short' },
  city: { type: String, width: 'medium' },
  zone: { type: Types.Select, options: 'north, center, south, islands, europe, other', default: 'north', index: true },
  country: { type: Types.Relationship, ref: 'Country', index: true },
  phonehome: { type: String, width: 'short', label: 'Phone home' },
  phonework: { type: String, width: 'short', label: 'Phone work' },
  email: { type: Types.Email },
  birthday: { type: Types.Date },
  agegroup: { type: Types.Select, options: 'baby, junior, senior, old', default: 'senior', index: true, label: 'Age group' },
  pathology: { type: Types.Relationship, ref: 'Pathology', index: true },
  doctor: { type: Types.Relationship, ref: 'Doctor', index: true },
  hospital: { type: Types.Relationship, ref: 'Hospital', index: true },
  father: { type: String, width: 'medium' },
  mother: { type: String, width: 'medium' },
  obs: { type: Types.Textarea }
});

Member.defaultColumns = 'title, state|20%, city|20%, email|20%';
Member.register();
