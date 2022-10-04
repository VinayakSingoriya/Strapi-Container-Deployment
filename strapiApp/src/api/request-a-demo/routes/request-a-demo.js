'use strict';

/**
 * request-a-demo router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::request-a-demo.request-a-demo');
