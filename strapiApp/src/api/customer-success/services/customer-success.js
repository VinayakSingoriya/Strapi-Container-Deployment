'use strict';

/**
 * customer-success service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-success.customer-success');
