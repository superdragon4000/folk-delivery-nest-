

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Migrations
To create/generate migrations use:
Create
$ npm run migration:create src/database/migration/
Generate
$ npm run migration:generate src/database/migration/
To run migrations use:
$ npm run migration:run

Seeds
To run seeds use:
$ npm run seed:run

Drop Schemas
To drop schemas use:
$ npm run schema:drop