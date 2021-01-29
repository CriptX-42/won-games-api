"use strict";
module.exports = {
  populate: async (params) => {
    const cat = await strapi.services.category.find({ name: "Action" });

    console.log(cat);
  },
};
