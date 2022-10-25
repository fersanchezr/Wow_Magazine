"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOne: (ctx) => {
    return strapi.query("views").findOne(ctx.query, [
      {
        path: "Content",
        populate: {
          path: "Content",
          populate: {
            path: "sections",

            path: "author",
          },
        },
      },
      {
        path: "categories",
        populate: {
          path: "sub_categories",
        },
      },
      {
        path: "categories",
        populate: {
          path: "notes",
        },
      },
    ]);
  },
};
