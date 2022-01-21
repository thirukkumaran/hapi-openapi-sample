# API prototyping with Stoplight studio and Hapi framework

# API endpoints

The following endpoints are created with Stoplight studio ( https://stoplight.io/ ), please refer API descriptions at /apis/users.yaml

```
POST /users            - Create new user
GET  /users/{userid}   - Get an existing user details
GET  /users/{userid}   - Update an existing user details

```


# API Implementation

Hapi framework ( https://hapi.dev/ ) has been used to implement the APIs, you may refer the handlers at /handlers folder 

To start the application,

```
node start
```

