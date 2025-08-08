const express = require("express");
const next = require("next");
const { faker } = require("@faker-js/faker");
const _ = require("lodash");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  app.use(express.json());

  // app.get("/api/search", (req, res) => {
  //   const location = req.query.location;
  //   console.log("📥 Received location:", location);
  //   res.json(location);
  // });

  //mock api
  app.get("/api/search", (req, res) => {
    const count = 20
    if (!count) {
      return res.status(400).send({ errorMsg: " ไม่มี parameter count" });
    }
    res.send(
      _.times(count, () => {
        const address = faker.location;
        return {
          country: address.country(),
          city: address.city(),
          state: address.state(),
          zipCode: address.zipCode(),
        };
      })
    );
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });
});


// app.get('/api/hotels', (req, res) => {
//   const search = req.query.q || '';
//   const result = hotels.filter(hotel =>
//     hotel.name.toLowerCase().includes(search.toLowerCase())
//   );
//   res.json(result);
// });