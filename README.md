# API prototyping with Stoplight studio and Hapi framework

# API Design

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
npm install
node start
```

# API testing

Please note that all the API endpoints will be giving static response.

To create new user

```
curl --request POST \
  --url http://localhost:3000/users \
  --header 'Content-Type: application/json' \
  --data '{
  "firstName": "Thiru",
  "lastName": "Natarajan",
  "email": "test@test.com",
  "dateOfBirth": "2000-10-31"
}'
```

To read an user 

```
curl --request GET \
  --url http://127.0.0.1:3100/users/1 \
  --header 'Content-Type: application/json'
```

To update an user

```
curl --request PATCH \
  --url http://127.0.0.1:3100/users/1 \
  --header 'Content-Type: application/json' \
  --data '{
  "firstName": "Thiru"
  "lastName": "Natarajan",
}'
```