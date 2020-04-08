/*
 * This is an example of a server that utilizes the router.
 */

// Importing some console colors
import {
  green,
  cyan,
  bold,
  yellow,
} from "fmt";
import {
  Application,
  Context,
  Status,
  send,
} from "https://deno.land/x/oak/mod.ts";
import { routes, allowedMethods } from "./server/routes.ts";

function notFound(context: Context) {
  context.response.status = Status.NotFound;
  context.response.body = `<html><body><h1>404 - Not Found</h1><p>Path <code>${context.request.url}</code> not found.`;
}

const app = new Application();


app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(
    `${green(context.request.method)} ${cyan(context.request.url)} - ${bold(
      String(rt)
    )}`
  );
});

// Response Time
app.use(async (context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  context.response.headers.set("X-Response-Time", `${ms}ms`);
});


app.use(async (context) => {
  //Send to the app or serve static file
  let resource;
  switch (context.request.path.split("/")[1]) {
    case "resources":
      resource = context.request.path;
      break;
    default:
      resource = "index.html";
  }

  await send(context, resource, {
    root: "public",
  });
});
// Use the router
app.use(routes);
app.use(allowedMethods);

// A basic 404 page
app.use(notFound);

const address = "127.0.0.1:8000";
console.log(bold("Start listening on ") + yellow('http://' + address));
await app.listen(address);
console.log(bold("Finished."));
