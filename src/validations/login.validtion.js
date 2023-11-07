const Joi = require("joi")


const login = {
  body: Joi.object().keys({
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  })
}
/** GEt login list */
const getuser = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

const updateDetails = {
  params: Joi.object().keys({
    loginId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    email: Joi.string().trim(),
    password: Joi.string().trim(),
  }),
};

module.exports = {
  login,
  getuser,
  updateDetails
}