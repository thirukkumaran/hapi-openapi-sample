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
      id: "324234",
      firstName: "Thiru",
      lastName: "Natarajan",
      email: "test@test.com",
      dateOfBirth: "2000-10-31",
      createDate: "2022-03-04",
      "emailVerified": false,

    };
    return h.response(response).code(201);
  },
};
