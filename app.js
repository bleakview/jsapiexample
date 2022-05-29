import koaCompress from "koa-compress";
import koaLogger from "koa-logger";
import koa from "koa";
import sequelize from "./db/sequilize.js";
import initDB from "./db/init.js";
import booksRouter from "./book/routes.js";
import docsRouter from "./docs/routes.js";
import koaBodyParser from "koa-bodyparser";

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

function initApp() {
  console.log(`init App...`);
  try {
    const app = new koa();
    //add logger
    app.use(koaLogger());
    //add default route
    app.use(koaBodyParser());
    app.use(booksRouter.routes());
    app.use(booksRouter.allowedMethods());
    //add our swagger documentation
    app.use(docsRouter.routes());
    app.use(docsRouter.allowedMethods());
    //compress our output
    app.use(koaCompress());
    return app;
  } catch (error) {
    console.log("Unable to init app");
    console.log(error.message);
    process.exit(1);
  }
}
//check if we can connect to db
await assertDatabaseConnectionOk();
//init our test database
await initDB();
//start our app
const app = initApp();

export default app;
