"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: (ctx) => {
    return strapi.query("sub-categories").find(ctx.query, [
      {
        path: "notes",
        populate: {
          path: "author",
        },
      },
    ]);
  },
};
