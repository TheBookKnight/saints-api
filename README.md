# Saints API Service

This is a tutorial on how to build an API service.

## Tutorial

### Step 0: Install Prerequisites and Setup Files

Create the following:

- [ ] Copy the _index.js_ file from this tutorial and paste it in the root directory.
- [ ] Create the _data_ subdirectory. Copy the _saints.json_ file from this tutorial and paste it in here. This will have the data examples.
- [ ] Create the _scripts_ subdirectory. Copy the _saints.sh_ file from this tutorial and paste it in here. This script will import the data.
- [ ] Add a _.gitignore_ file and add `node_modules` to it. We don't want to commit any of those files to the Git repo.
- [ ] Copy this tutorial's _Makefile_. [Makefiles](https://www.gnu.org/software/make/manual/make.html#Introduction) compiles and links a program.

Install the following:

- [ ] [NodeJS](https://nodejs.org/en). I used Node v22.

  - [ ] Then, run `npm init` to setup a _package.json_ file. This file is used as a manifest, storing information about applications, modules, packages, and more.
  - [ ] Add `"type": "module` to the _package.json_

  - [ ] Install [Express](https://expressjs.com/en/starter/installing.html) via `npm install express --save`
    - [ ] Add npm script `"start": "node ."`. So, when you run `npm run start`, it starts the API service. When you navigate to http://localhost:3000/, you'll see a "Hello World!" Stop the service via pressing CTRL + C at the same time.
  - [ ] Install [ESLint](https://eslint.org/docs/latest/use/getting-started) via `npm install --save-dev eslint @eslint/js`
    - [ ] Create an ESLint config (_eslint.config.js_) to setup code rules. See the file for what rules to add.
    - [ ] Run `npm install globals`
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

### Step 1: Create GET Request

We'll create a GET request to retrieve an individual saint's data.

1. You'll need to setup a _.env_ file and add the `ATLAS_URI` connection string with the `PORT` number.
   1. In this tutorial, it'll be `ATLAS_URI=mongodb://localhost` and `PORT=27017`
2. To load these environment variables, you'll need to install the **[dotenv](https://www.npmjs.com/package/dotenv)** NPM library via `npm install dotenv`

3. Then, you'll need to build a module to connect to the database.

   1. Create a _server_ subdirectory and inside, a _db_ subdirectory.
   2. Create a _conn.js_ file in the nested directory _server/db_. It should have the same contents as this tutorial step's file.
   3. Install MongoDB via `npm install mongodb`

4. Now, confirm that below exists at the top of the _conn.js_ file. This script loads the environment variables.

```
import dotenv from "dotenv";
dotenv.config();
```

5. Now, you'll expose the Read route for getting an individual saint.

   1. Inside the _server_ subdirectory, create a _routes_ subdirectory.
   2. Create a _saints.js_ file in the nested directory _server/routes_
   3. It should have the same contents as this tutorial step's file.

6. At the bottom of the _index.js_ file, add `app.use("/saints", saints);`

7. When you run the app via `npm run start`, you can check if the route works via `curl http://localhost:3000/saints/{ID}`. You can get the `ID` from the _saints.json_ file.
   1. Example `curl http://localhost:3000/saints/66e66e3d023667249e24853b`

### Step 2: Create GET Request (of a list of saints)

We'll create a GET request to retrieve a list of saints.

Inside the _saints.js_ file created in the previous step, add the following below. So by default, it should return at least 50 saints.

Right now, we only have three so we should see a list of 3 saints.

```
router.get("/", async (req, res) => {
    let collection = await db.collection("saints");
    let results = await collection.find({})
        .limit(50)
        .toArray();
    res.send(results).status(200);
});
```
