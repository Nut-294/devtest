const express = require("express");
const next = require("next");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {

  const app = express();
  app.use(express.json());

  app.get("/api/search", (req, res) => {
  const location = req.query.location; 
  console.log("📥 Received location:", location);
  res.json({ message: "Location received", location });
});


  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });
});
