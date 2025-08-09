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


  // สร้างข้อมูล mock คงที่แค่ครั้งเดียวตอน server start
const allHotels = _.times(300, () => ({
  city: faker.location.city(),
  country: faker.location.country(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode(),
  hotelName: faker.company.name(),
  description: faker.lorem.sentence(),
  imageUrl: `https://picsum.photos/400/200?random=${faker.number.int(1000)}`,
}));

app.get('/api/search', (req, res) => {
  const location = req.query.location;

  // ถ้า location ไม่มี หรือ เป็นค่าว่าง
  if (!location || location.trim() === '') {
    // ส่ง allHotels ทั้งหมดกลับไปเลย
    return res.json(allHotels);
  }

  // กรองจากข้อมูลคงที่
  const filtered = allHotels.filter(hotel =>
    hotel.city.toLowerCase().includes(location.toLowerCase()) ||
    hotel.country.toLowerCase().includes(location.toLowerCase())||
    hotel.state.toLowerCase().includes(location.toLowerCase())||
    hotel.hotelName.toLowerCase().includes(location.toLowerCase())
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