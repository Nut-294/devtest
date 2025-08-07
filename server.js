const express = require("express");
const next = require("next");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  // ตัวอย่าง route express
  app.get("/hello", (req, res) => {
    res.send("Hello from Express!");
  });

  // ให้ Next.js handle ทุก route ที่เหลือ
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });
});
