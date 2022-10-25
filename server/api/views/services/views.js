"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(params, populate) {
    const results = await strapi
      .query("views")
      .find({ ...params, _limit: 1 }, populate);
    return _.first(results) || null;
  },
};
