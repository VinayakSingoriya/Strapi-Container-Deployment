'use strict';

/**
 * multichannel router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::multichannel.multichannel');
