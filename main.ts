/*
 * This is an example of a server that utilizes the router.
 */

// Importing some console colors
import {
  green,
  cyan,
  bold,
  yellow
} from "fmt";
import {
  Application,
  Context,
  Status,
  send,
  HttpError
} from "https://deno.land/x/oak/mod.ts";
import { routes, allowedMethods } from "./server/routes.ts";

function notFound(context: Context) {
  context.response.status = Status.NotFound;
  context.response.body =
    `<html><body><h1>404 - Not Found</h1><p>Path <code>${context.request.url}</code> not found.`;
}

const app = new Application();

//Middleware for catching and throwing HTTP errors
app.use(async (
  { response }: Context,
  next: () => Promise<void>,
) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof HttpError) {
      //Add error catching here
      switch (error.status) {
        case 404:
          response.status = Status.NotFound;
          response.body = {
            message: "Requested file not found",
          };
          break;
        default:
          response.status = Status.InternalServerError;
          response.body = {
            message: "Internal Server Error",
          };
          console.error(`Reported Error: ${error.message}`);
          break;
      }
    } else {
      response.status = 500;
      response.body = {
        message: "Internal Server Error",
      };
      console.error(`Reported Error: ${error.message}`);
    }
  }
});

// Use the router
app.use(routes);
app.use(allowedMethods);

app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(
    `${green(context.request.method)} ${cyan(context.request.url)} - ${bold(
      String(rt),
    )}`,
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
  if (context.request.path.split("/")[1] === "public") {
    const file = context.request.path.replace(/^\/public/, "");
    await send(context, file, {
      root: "public",
    });
  }
});

const address = "127.0.0.1:8000";
console.log(bold("Start listening on ") + yellow("http://" + address));
await app.listen(address);
console.log(bold("Finished."));
