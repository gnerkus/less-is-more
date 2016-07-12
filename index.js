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
  "nested rules",
  "nested directives and bubbling",
  "operations",
  "escaping",
  "functions",
  "namespaces and accessors",
  "scope",
  "comments",
  "importing",
])

module.exports = lessismore;
