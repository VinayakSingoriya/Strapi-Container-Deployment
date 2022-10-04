'use strict';

/**
 *  request-a-demo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::request-a-demo.request-a-demo');
