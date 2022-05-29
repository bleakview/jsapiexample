import Router from "@koa/router";
import yamlJs from "yamljs";
import KoaSwagger from "koa2-swagger-ui";

// init our swagger documentation
const router = new Router();
const spec = yamlJs.load("./docs/openapi.yaml");
const koaSwagger = KoaSwagger.koaSwagger({
  routePrefix: false,
  swaggerOptions: { spec },
});
router.get("/docs", koaSwagger);

export default router;
