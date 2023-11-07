const login = require("../models/login.modale");

/**
 *  login
 * @param {object} reqBody
 * @returns {Promise<login>}
 */
const login = async (reqBody) => {
  return login.create(reqBody);
};
const getuser = async (filter, options) => {
  return login.find()
};
const deleteuser = async (loginId) => {
  return login.findByIdAndDelete(loginId);
};

const getloginById = async (loginId) => {
  return login.findById(loginId);
};

/**
 * login details update by id
 * @param {ObjectId} loginId
 * @param {object} updateBody
 * @returns {Promise<login>}
 */
const updateDetails = async (loginId, updateBody) => {
  return login.findByIdAndUpdate(loginId, { $set: updateBody });
};

module.exports = {
  login,
  getuser,
  deleteuser,
  updateDetails,
  getloginById
};