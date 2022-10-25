"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOne: (ctx) => {
    return strapi.query("categories").findOne(ctx.query, [
      {
        path: "sub_categories",
        populate: {
          path: "notes",
          populate: {
            path: "author",
          },
        },
      },
    ]);
  },
  find: (ctx) => {
    return strapi.query("categories").find(ctx.query, [
      {
        path: "sub_categories",
        populate: {
          path: "notes",
          populate: {
            path: "author",
          },
        },
      },
    ]);
  },
};
