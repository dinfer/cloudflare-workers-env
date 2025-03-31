import { defineMiddleware } from "astro:middleware";
import { env } from "cloudflare:workers";
export const onRequest = defineMiddleware(async (context, next) => {
  console.log(env);
  return next();
});
