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

  // app.get("/api/search:", (req, res) => {
  //   const location = req.query.location;
  //   console.log("📥 Received location:", location);
  //   res.json(location);
  // });


  //mock api
  app.get('/api/search', (req, res) => {
    const count = 100;
  
    // รับ location จาก query string
    const location = req.query.location || '';
  
    if (!location) {
      return res.status(400).json({ errorMsg: 'Missing query parameter: location' });
    }
  
    // สร้างข้อมูลปลอม 100 ตัว
    const hotels = _.times(count, () => {
      const city = faker.location.city();
      const country = faker.location.country();
  
      return {
        city,
        country,
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        hotelName: faker.company.name(),
        description: faker.lorem.sentence(),
        imageUrl: faker.image.urlPicsumPhotos({ width: 640, height: 480 }),
      };
    });
  
    // กรองเฉพาะโรงแรมที่ city หรือ country ตรงกับ location ที่ส่งมา (case insensitive)
    const filtered = hotels.filter(hotel =>
      hotel.city.toLowerCase().includes(location.toLowerCase()) ||
      hotel.country.toLowerCase().includes(location.toLowerCase())
    );
  
    res.json(filtered);
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