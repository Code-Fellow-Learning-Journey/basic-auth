# LAB - Class 06

## Project: basic-auth

### Author: Hunter Fehr

### Problem Domain

Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Postgres database for storage.

### Links and Resources

- [ci/cd](https://github.com/hmfehr/basic-auth/actions/new) (GitHub Actions)


### Setup

#### `.env` requirements

see `.env.sample`

- PORT: 3000

#### How to initialize/run your application

- nodemon

#### Features / Routes

- Feature One: deploy to dev
- GET : `/` - specific route to hit
- GET : `bad` - specific route to hit

- Feature Two: deploy to prod
- GET : `/hello` - specific route to hit
- GET : `bad` - specific route to hit

#### Tests

- How do you run tests?
  - npm test
- Any tests of note?
  - handles root path
  - handles invalid requests
  - handles errors

#### UML

![UML](/screenshots/lab06.jpg)
