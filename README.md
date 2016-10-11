# Heroes

[![Build Status](https://travis-ci.org/jconroy/heroes.svg?branch=master)](https://travis-ci.org/jconroy/heroes)

My personal node and react playground.

View the app at [https://hidden-ocean-68398.herokuapp.com/](https://hidden-ocean-68398.herokuapp.com/)

## Installation

```
git clone <repo>

cd <cloned repo dir>

npm install
```
## Starting a server

Quickest method is to use:

```
npm run start
```

Alternative method is to:

```
npm run build

npm run serve
```

Then browse to [http://localhost:3000](http://localhost:3000)

## Test

Unit tests and linting can be performed by simply running:

```
npm test
```

To simply run unit tests:

```
./node_modules/mocha/bin/mocha
```

To simply lint:

```
./node_modules/.bin/eslint --ext .js --ext .jsx src
```

# Credit

Based off https://github.com/lmammino/judo-heroes

# Notes

* TravisCI unit tests are setup with [Mocha](https://mochajs.org/) Test Framework and [Chai](http://chaijs.com/) assertion library.
* Additionally the src js/jsx are linted with [ESLint](http://eslint.org/)
* I seen lots of people are starting to use [Jest](http://facebook.github.io/jest/) - seems like it is an easier test framework to grok (but some sites suggest it is slower to run and less polished).
* Auto deploys from Github to a free Heroku account.