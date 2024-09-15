# Saints API Service

This is a tutorial on how to build an API service.

## Tutorial

### Step 0: Install Prerequisites and Setup Files

Create the following:

- [ ] Create the _data_ subdirectory. Copy the _saints.json_ file from this tutorial and paste it in here. This will have the data examples.
- [ ] Create the _scripts_ subdirectory. Copy the _saints.sh_ file from this tutorial and paste it in here. This script will import the data.
- [ ] Add a _.gitignore_ file and add `node_modules` to it. We don't want to commit any of those files to the Git repo.
- [ ] Copy this tutorial's _Makefile_. [Makefiles](https://www.gnu.org/software/make/manual/make.html#Introduction) compiles and links a program.

Install the following:

- [ ] [NodeJS](https://nodejs.org/en). I used Node v22.

  - [ ] Then, run `npm init` to setup a _package.json_ file. This file is used as a manifest, storing information about applications, modules, packages, and more.
  - [ ] Add `"type": "module` to the _package.json_

  - [ ] Install [Express](https://expressjs.com/en/starter/installing.html) via `npm install express --save`
  - [ ] Install [ESLint](https://eslint.org/docs/latest/use/getting-started) via `npm install --save-dev eslint @eslint/js`
    - [ ] Create an ESLint config (_eslint.config.js_) to setup code rules. See the file for what rules to add.
    - [ ] In the _package.json_, add npm script `"lint": "npx eslint ./"`. So, to run the linter, you can use `npm run lint`

- [ ] Install [Docker](https://docs.docker.com/engine/install/).
  - [ ] Will need to pull [Mongo image](https://hub.docker.com/_/mongo) for storing data via `docker pull mongo`.
  - [ ] Create a _docker-compose.yml_. See the file for configuration.
  - [ ] The database is working properly if you can run `make start import`. Shut it down via `make stop`
    - You can use [the Mongo Compass tool](https://www.mongodb.com/try/download/compass) to view the data inside. You should be able to see database "api" with the collection "saints". This collection should have several saints.

**Node.js®** is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

**Express** is a minimal and flexible Node.js web application framework. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

**ESLint** is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

**Docker** helps developers build, share, run, and verify applications anywhere — without tedious environment configuration or management

**[MongoDB](https://www.mongodb.com/)** is a powerful, open-source, document-oriented NoSQL database designed to handle large volumes of data and provide high performance, high availability, and easy scalability.
