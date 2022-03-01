"use strict";

/**
 * Operations on /v1/user
 */
module.exports = {
  /**
   * summary: Create New User
   * description: Create a new user.
   * parameters: body
   * produces:
   * responses: 200
   */
  post: function createUser(request, h) {
    const response = {
      firstName: "Thiru",
      lastName: "Natarajan",
      email: "thiru_natarajan@hive.gov.sg",
      dateOfBirth: "2000-08-24",
    };
    return h.response(response).code(200);
  },
};
