var workshopper = require('workshopper-adventure');
var path = require('path');
var lessismore = workshopper({
  title: 'LESS is more',
  exerciseDir: path.join(__dirname, 'exercises'),
  appDir: __dirname,
  languages: ['en', 'fr']
});

lessismore.addAll([
  "variables",
  "mixins",
  "nested_rules",
  "nested_directives_and_bubbling",
  "operations",
  "escaping",
  "functions",
  "namespaces_and_accessors",
  "scope",
  "importing",
])

module.exports = lessismore;
