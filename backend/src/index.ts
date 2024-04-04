import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  return c.json({
    message: "/api/v1/user/signup",
  });
});

app.post("/api/v1/user/signin", (c) => {
  return c.json({
    message: "/api/v1/user/signin",
  });
});

app.post("/api/v1/blog", (c) => {
  return c.json({
    message: "/api/v1/blog",
  });
});

app.put("/api/v1/blog", (c) => {
  return c.json({
    message: "/api/v1/blog",
  });
});

app.get("/api/v1/blog/:id", (c) => {
  return c.json({
    message: "get by id",
    req: c.req.method,
  });
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.json({
    message: "/api/v1/blog/bulk bulllkkkkk",
    req: c.req.method,
  });
});

export default app;
