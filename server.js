const Hapi = require('@hapi/hapi');
const Path = require('path');
const HapiOpenApi = require('hapi-openapi');
const Boom = require('@hapi/boom');
const authKeycloak = require('hapi-auth-keycloak');

const server = new Hapi.Server({
  port: process.env.ENGINE_PORT || 3000,
  host: '0.0.0.0',
  debug:
    process.env.NODE_ENV === 'development' ? { request: ['error'] } : undefined,
  routes: {
    cors: {
      origin: [
        '*'
      ],
    }
  }
});

 async function setup () {

   // await server.register({
  //   plugin: authKeycloak,
  // });

  // server.auth.strategy("keycloak-jwt", "keycloak-jwt", {
  //   realmUrl: "http://localhost:8081/auth/realms/master",
  //   clientId: "cft",
  //   minTimeBetweenJwksRequests: 15,
  //   cache: true,
  //   userInfo: ["name", "email"],
  // });

  await server.register({
    plugin: HapiOpenApi,
    options: {
      api: Path.join(__dirname, './apis/users.yaml'),
      handlers: Path.join(__dirname, './handlers'),
    },
  });

  server.route({
    method: 'get',
    path: '/',
    handler (request, h) {
      return h.response().code(200);
    },
  });

  server.route({
    method: '*',
    path: '/{any*}',
    handler () {
      return Boom.notFound('Resource not found');
    },
  });
}

async function init () {
  await setup();
  await server.initialize();
  return server;
}

async function start () {
  await setup();
  await server.start();
  console.log(['info'], `App running at: ${server.info.uri}`);
  return server;
}

module.exports = {
  server,
  init,
  start,
};
