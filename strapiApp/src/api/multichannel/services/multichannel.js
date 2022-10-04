'use strict';

/**
 * multichannel service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::multichannel.multichannel');
