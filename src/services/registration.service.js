const registration = require("../models/registration.modale");

/**
 * Create registration
 * @param {object} reqBody
 * @returns {Promise<registration>}
 */
const createregistration = async (reqBody) => {
  return registration.create(reqBody);
};
const getregistrationList = async (filter, options) => {
  return registration.find()
};
const deleteregistration = async (registrationId) => {
  return registration.findByIdAndDelete(registrationId);
};

const getregistrationById = async (registrationId) => {
  return registration.findById(registrationId);
};

/**
 * registration details update by id
 * @param {ObjectId} registrationId
 * @param {object} updateBody
 * @returns {Promise<registration>}
 */
const updateDetails = async (registrationId, updateBody) => {
  return registration.findByIdAndUpdate(registrationId, { $set: updateBody });
};

module.exports = {
  createregistration,
  getregistrationList,
  deleteregistration,
  updateDetails,
  getregistrationById
};