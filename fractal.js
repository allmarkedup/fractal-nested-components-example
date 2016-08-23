'use strict';

/*
 * General fractal setup
 */

const fractal = module.exports = require('@frctl/fractal').create();

fractal.set('project.title', 'Nested Example');
fractal.components.set('path', __dirname + '/components');

/*
 * Use the handlebars-layouts helpers
 */

const layouts = require('handlebars-layouts');

layouts.register(fractal.components.engine().handlebars);
