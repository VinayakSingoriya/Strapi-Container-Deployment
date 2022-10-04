'use strict';

/**
 * request-a-demo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-a-demo.request-a-demo');
