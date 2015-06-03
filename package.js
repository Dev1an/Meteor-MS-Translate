Package.describe({
  name: 'devian:mstranslate',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Tranlsate with Microsoft Translator',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Dev1an/Meteor-MS-Translate',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['http', 'ejson', 'peerlibrary:xml2js@0.4.8_1'], 'server');
  
  api.addFiles(['authentication.js','mstranslate.js'], 'server');

  api.export('Microsoft', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('devian:mstranslate');
  api.addFiles('mstranslate-tests.js');
});