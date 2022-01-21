'use strict';

const Boom = require('boom');

/**
 * Operations on /v1/users/{userId}
 */
module.exports = {
  /**
   * summary: Get User Info by User ID
   * description: Retrieve the information of the user with the matching user ID.
   * parameters:
   * produces:
   * responses: 200
   */
  get: function getUser (request, h) {
    const response = {
      firstName: "Thiru",
      lastName: "Natarajan",
      email: "thiru_natarajan@hive.gov.sg",
      dateOfBirth: "2000-08-24",
    };
    return h.response(response).code(200);
  },
  /**
   * summary: Update User Information
   * description: Update the information of an existing user.
   * parameters: body
   * produces:
   * responses: 200
   */
  patch: function UpdateUser (request, h) {
    const response = {
      firstName: "Thiru",
      lastName: "Natarajan",
      email: "thiru_natarajan@hive.gov.sg",
      dateOfBirth: "2000-08-24",
    };
    return h.response(response).code(200);
  },
};
