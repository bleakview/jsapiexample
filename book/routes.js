import Router from "@koa/router";
import sequelize from "../db/sequilize.js";
const router = new Router();
//init our router config for books api
router
  .get("/books", async (ctx, next) => {
    const books = await sequelize.models.book.findAll();
    ctx.status = 200;
    ctx.body = books;
    await next();
  })
  .get("/books/:id", async (ctx, next) => {
    const book = await sequelize.models.book.findByPk(ctx.params.id);
    if (book) {
      ctx.status = 200;
      ctx.body = book;
    } else {
      ctx.status = 404;
    }
    await next();
  })
  .post("/books", async (ctx, next) => {
    //block if anyone try to alter id
    delete ctx.request.body["id"];
    const createdBook = await sequelize.models.book.create(ctx.request.body);
    ctx.status = 200;
    ctx.body = createdBook;
    await next();
  })
  .put("/books/:id", async (ctx, next) => {
    //block if anyone try to alter id
    delete ctx.request.body["id"];
    await await sequelize.models.book.update(ctx.request.body, {
      where: {
        id: ctx.params.id,
      },
    });
    ctx.status = 200;
    await next();
  });

export default router;
